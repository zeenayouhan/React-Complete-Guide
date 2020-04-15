import React from 'react';

const person = (props) =>{
    return (
        <div onClick={props.click}>
            <p>I am a person  named {props.name1} and {props.age}.</p>
            <input type="text" onChange={props.change} value={props.name1}></input>
       
        </div>
    
        )
}

export default person;