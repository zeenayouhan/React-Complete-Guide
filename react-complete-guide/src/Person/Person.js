import React from 'react';
import './Person.css';

const person = (props) =>{
    return (
        <div onClick={props.click} className="Person">
            <p>I am a person  named {props.name1} and {props.age}.</p>
            <input type="text" onChange={props.change} value={props.name1}></input>
       
        </div>
    
        )
}

export default person;