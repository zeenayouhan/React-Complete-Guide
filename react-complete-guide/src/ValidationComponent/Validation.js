import React from 'react';

const validation =(props)=>{
    const style={}
    let validationMessage="Text long enough";
    if(props.inputlength<=5){
        validationMessage="Text too short";
        style.backgroundColor="lightblue";
    }
    
    return(
        <div style={style}>
            {
                <p>{validationMessage}</p>
                

            }
            
        </div>
    )

}
export default validation;