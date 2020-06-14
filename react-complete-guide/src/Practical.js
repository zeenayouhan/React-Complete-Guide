import React, { useState, Component } from "react";
import Person from "./Person/Person";
import "./App.css";
import Input from "./UserInput/userInput";
import Output from "./UserOuptut/userOutput";

// const App =props=>{
//   const [state, setNameState]=useState({
//     name:[
//       {username:'SuperMax'}
//     ]

//   })

//   const namehandler=(event)=>{
//     setNameState({
//       name:[{username: event.target.value}]
//     })
//   }
//   const style={
//     border:'2px solid red',
//     margin:'60px',
//     padding:'100px'
//   };
//   return(
//     <div style={style}>
//       <Input change={namehandler}/>
//       <Output userName={state.name[0].username} click={namehandler}/>
//       <Output userName={state.name[0].username} click={namehandler}/>
//     </div>

//   )

// }

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Max", age: 23 },
      { id: "3", name: "FSD", age: 24 },
    ],
    showPersons: false,
  });
  // const switchNameHandler = () => {
  //   setPersonsState({
  //     persons: [
  //       { name: "FDS", age: 28 },
  //       { name: "Max", age: 23 },
  //     ],
  //   });
  // };

  const nameChangedHandler = (event,id) => {
    const personIndex=personsState.persons.findIndex(p=> {return p.id===id});
    const person={...personsState.persons[personIndex]};

    person.name=event.target.value;
    const persons=[...personsState.persons];
    persons[personIndex]=person;

    setPersonsState({
      
      persons: persons
    });
  };

  const deleteHandler = (index) => {
   // // const person=personsState.persons[index];
   const person = [...personsState.persons];
    person.splice(index,1);
    setPersonsState({ persons: person });
  };

  
  const togglePerson = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { id: "1", name: "FDS", age: 28 },
        { id: "2", name: "Max", age: 23 },
        { id: "3", name: "Zeena", age: 24 },
      ],
      showPersons: !doesShow,
    });
  };
  const style = {
    font: "inherit",
    padding: "8px",
    cursor: "pointer",
  };
  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div style={style}>
        {personsState.persons.map((person) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={() => deleteHandler(person.id)}
              key={person.id}
              changed={(event)=>nameChangedHandler(event,person.id)}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="App">
      <button onClick={togglePerson}>TogglePerson</button>
      <h1>Hi, I am Zeena Youhan</h1>
      <p>It is working</p>
      {persons}

      {/* <button style={style} onClick={switchNameHandler}>
        Switch Name
      </button> */}
    </div>
    //React.createElement('div', null, React.createElement('h1',{className: 'App' }, "I am a girl"))
  );
};
export default App;
