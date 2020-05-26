import React, { useState, useEffect } from 'react'
import Item from './components/Item'
import ProgForm from './components/ProgForm'
import List from './components/List'
import Modal from './components/Modal'
import './style.css'

const SAVED_ITEMS = "savedItems"

function Prog() {

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {

        let it = new Item(text);

        setItems([...items, it])
        onHideModal();
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }
            return it;
        })
        setItems(updatedItems);
    }

    function onItemDeleted(item) {

        let filteredItems = items.filter(it => it.id !== item.id)

        setItems(filteredItems)
    }

    function onHideModal(e){
        setShowModal(false)

    }

    return (
        <div className="container">
            <header className="header"><h1>Prog</h1><button onClick={() => { setShowModal(true)}} className="button">+</button> </header>


            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

            <Modal show={showModal} onHideModal={onHideModal}>
                <ProgForm onAddItem={onAddItem}></ProgForm>
            </Modal>
        </div>
    )

}

export default Prog