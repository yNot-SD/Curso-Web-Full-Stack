import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

export default function Assistir(props) {

    const query = useQuery()

    useEffect(() =>{
        console.log(query)
    })

    return (
        <div className="page">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${query.get('v')}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}