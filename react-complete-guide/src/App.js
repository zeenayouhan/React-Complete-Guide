import React from 'react';
import {useState} from 'react';
import Validation from './ValidationComponent/Validation'
import Char from './Char/Char';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'

import './App.css';

const App = ()=>{
  const [inputsome, setinput] = useState({
    userInput:''
  })

  const inputChangeHandler=(event)=>{
    setinput({
      userInput:event.target.value
    })


  }
  const deleteCharhandler=(index)=>{
      const text=inputsome.userInput.split('');
      text.splice(index,1);
      const updatedText=text.join('');
      setinput({
        userInput: updatedText
      });

  }
  const charlist=inputsome.userInput.split('').map((ch,index)=>{
    return <Char  character={ch} key={index} clicked={()=>{deleteCharhandler(index)}}/>
  })

  let classes=['red'].join('') //red bold classess

  return(
<div>
  <ErrorBoundry>
  <input type="text" onChange={inputChangeHandler} value={inputsome.userInput} className="App"/>
  <p>{inputsome.userInput}</p>
  <Validation inputlength={inputsome.userInput.length}/>
  {charlist}
  </ErrorBoundry>

</div>
    
  )

}
export default App;