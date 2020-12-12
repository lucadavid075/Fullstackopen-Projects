import React from 'react'
import Parts from './Parts'


export default function Content(props) {
    console.log(props);
        return (
        <div>
            <Parts parts='Fundamentals of React' exercises={10}/>
            <Parts parts='Using props to pass data' exercises={7}/>
            <Parts  parts='State of a component' exercises={14}/>
        </div>
    )
}
