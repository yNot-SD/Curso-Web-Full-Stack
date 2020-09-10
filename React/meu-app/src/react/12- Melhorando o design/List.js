import React from 'react'
import '../style.css'
import Card from '../components/Card'

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
            {props.items.map(item => <li  key={item.id}>
                <Card className={item.done ? "done item" : "item"}>
                    {item.text}
                    <div>
                        <button onClick={() => { props.onDone(item) }}> <DoneImg done={item.done}></DoneImg> </button>
                        <button onClick={() => { props.onItemDeleted(item) }}>
                            <img src="./assets/bin.png" /></button>
                    </div>
                </Card>
            </li>)}
        </ul>
    )
}

export default List