import { useEffect, useState } from "react";

const NewComponent = (props) => {
    const [value, setValue] = useState(0)

    

    useEffect(() => {
        console.log("app_component")
    })
    return (
        <div className="newComponent">
        {value === 5 ? <p>{props.val}</p>: <p>nowy komponent</p>}
        {value === 1 && <p>xxx</p>}
        <button type="button" onClick={() => setValue(value + 1)}> + </button>
        <p>{value}</p>
        <button type="button" onClick={() => setValue(value - 1)}> - </button>
        </div>
    )
}

export default NewComponent;