import React, { useState } from 'react'

function ProgForm(props) {
    const [text, setText] = useState("");


    function handleChange(event) {
        let t = event.target.value;
        setText(t)
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText("")
        }
    }

    return (
        <form >
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={addItem}>Add</button>
        </form>
    )
}

    export default ProgForm