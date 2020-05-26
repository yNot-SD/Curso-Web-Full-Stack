import React, { useState } from 'react'
import List from './List'

function Prog() {

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        let t = event.target.value;
        setText(t)
    }

    function addItem(event) {
        event.preventDefault();
        if (text !== "") {
            setItems([...items, text])
            setText("")
        }
    }

    return (
        <div className="container">
            <h1>Prog</h1>
            <form >
                <input type="text" onChange={handleChange} value={text} />
                <button onClick={addItem}>Add</button>
            </form>

            <List items={items}></List>
        </div>
    )


}

export default Prog