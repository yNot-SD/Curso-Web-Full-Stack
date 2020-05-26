import React, { useState } from 'react'
import ProgForm from './ProgForm'
import List from './List'

function Prog() {

    const [items, setItems] = useState([]);

    function onAddItem(item) {
        setItems([...items, item])
    }

    return (
        <div className="container">
            <h1>Prog</h1>

            <ProgForm onAddItem={onAddItem}></ProgForm>

            <List items={items}></List>
        </div>
    )

}

export default Prog