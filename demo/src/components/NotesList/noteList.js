import { useState } from "react";
import Note from "../Note/note";
import { NOTES } from "./data";

const NoteList = ({ children }) => {
    const [currentNotes, setCurrentNotes] = useState(NOTES);
    const deleteNote = (noteId) => {
        setCurrentNotes(currentNotes.filter(note => note.id!== noteId));
    }

    return (
        <div>

            {currentNotes.map(
                (currentNote) => (
                    <Note 
                        key={currentNote.id}
                        title={currentNote.title} 
                        description={currentNote.description}
                        deleteNote={() => deleteNote(currentNote.id)} 
                    />
                )
            )}

            {/* <Note title='Title 1' description='Desc=1'/> */}
        </div>
    )
}

export default NoteList