import React from 'react'
import './style.css'

function DoneImg(props) {
    if (props.done) {
        return <img src="./assets/on.png" alt="on" />
    } else {
        return <img src="./assets/off.png" alt="off" />
    }
}

function List(props) {
    return (
        <ul>
            {props.items.map(item => <li className={item.done?"done":""} key={item.id}>{item.text}
                <button onClick={() => { props.onDone(item) }}> <DoneImg done={item.done}></DoneImg> </button>
                <button onClick={() => { props.onItemDeleted(item) }}>
                    <img src="./assets/bin.png" /></button>
            </li>)}
        </ul>
    )
}

export default List