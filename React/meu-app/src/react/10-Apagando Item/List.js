import React from 'react'
import './style.css'

function List(props) {
    return (
        <ul>
            {props.items.map(item => <li key={item.id}>{item.text}
                <button onClick={() => { props.onItemDeleted(item) }}>
                    <img src="./assets/bin.png" /></button></li>)}
        </ul>
    )
}

export default List