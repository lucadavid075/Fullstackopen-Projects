import React from 'react'

export default function Parts(props) {
    console.log(props)
    return (
        <div>
            <p>{props.parts} {props.exercises}</p>
        </div>
    )
}
