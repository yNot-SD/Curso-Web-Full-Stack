import React, { useState } from 'react'
import Item from './Item'
import ProgForm from './ProgForm'
import List from './List'

function Prog() {

    const [items, setItems] = useState([]);

    function onAddItem(text) {
        let it = new Item(text);
        setItems([...items, it])
    }

    function onItemDeleted(item){
        let filteredItems = items.filter(it => it.id != item.id)
        setItems(filteredItems)
    }

    return (
        <div className="container">
            <h1>Prog</h1>

            <ProgForm onAddItem={onAddItem}></ProgForm>

            <List onItemDeleted={onItemDeleted} items={items}></List>
        </div>
    )

}

export default Prog