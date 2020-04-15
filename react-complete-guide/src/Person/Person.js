import React from 'react';

const person = (props) =>{
    return (
        <div onClick={props.click}>
            <p>I am a person  named {props.name1} and {props.age}.</p>
       
        </div>
    
        )
}

export default person;