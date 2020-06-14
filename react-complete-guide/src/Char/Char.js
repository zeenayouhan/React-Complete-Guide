import React from 'react';
import styled from 'styled-components';


const char =(props)=>{

    const StyleDiv=  styled.div`
    display:'inline-block',
padding:'16px',
margin:'16px',
border:'1px black solid',
textAlign:'center',
backgroundColor: 'blue',
color: 'white',
':hover':{
    backgroundColor: 'orange',
    color:'black'

    `
    const style={
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        border:'1px black solid',
        textAlign:'center',
        backgroundColor: 'blue',
        color: 'white',
        ':hover':{
            backgroundColor: 'orange',
            color:'black'
        }
        
    }
    return(
      //  <div style={style} onClick={props.clicked}>
           <StyleDiv>
               {props.character}

           </StyleDiv>
            

        
    );

};

export default char;