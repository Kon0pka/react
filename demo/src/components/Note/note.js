import { useState } from "react";
import EditIcon from "../Svg/edit"
import DeleteIcon from "../Svg/delete"
import '../Note/style.css'
import Modal from "../Modal/modal";
// import Modal from "../Modal/modal"

const Note = ({ title, description, deleteNote }) => {
    const [showDescription ,setShowDescription] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [currentTitle, setCurrentTitle] = useState(title)
    const [currentDescription, setCurrentDescripition] = useState(description)
    

    return (
        <div>
            <div className="main">
                <button type="button" onClick={() => setShowDescription(prevState => !prevState)}>
                    <h2>{currentTitle}</h2>
                </button>

                <ol>
                    <button type="button" onClick={() => setIsModal(true)}>
                        <EditIcon width={16} height={16}/>
                    </button>

                    <button type="button" onClick={deleteNote}>
                        <DeleteIcon width={16} height={16}/>
                    </button>

                </ol>
                
            </div>

            {showDescription &&(
                <p>{currentDescription}</p>
            )}
            <Modal active={isModal} setIsModal={setIsModal}>
            <h2>Edit</h2>
                <from>
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" value={currentTitle} onChange={(event)=>setCurrentTitle(event.target.value)}/>
                    <label for="description">Describtion:</label>
                    <input id="description" name="description" type="text" value={currentTitle} onChange={(event)=>setCurrentDescripition(event.target.value)}/>
                    <button type="submit" onClick={() => setIsModal(false)}>Save</button>
                </from>
            </Modal>
        </div>
    )
}

export default Note