import React, { useState, Component } from 'react';
import Person from './Person/Person';
import './App.css';
import person from './Person/Person';




// const App = props => {
//    const [personState,setPersonState]= useState({
//      Person:[
//         {name:"Zeena", age:"25"},
//         {name:"Zamemr", age:'26'}
//       ]
//      });
//      const switchHandler=()=>{
//               //console.log("Clicky");
//               setPersonState({
//                 Person:[
//                   {name:"ZeenaL", age:"25"},
//                   {name:"Zameer", age:'26'}
//                 ]
//               });
//             }
//         return(
//         <div className="App">
//           <h1>Hi I am Zameer Younus</h1>
//           <Person name1={personState.Person[0].name} age={personState.Person[0].age}/>
//           <Person name1={personState.Person[1].name} age={personState.Person[1].age}/>
//           <button onClick={switchHandler}>Switch</button>
//         </div>
//           // js compile to this one-> React.createElement('div',{className:"App"},React.createElement('h1',null,"Hi I am Zameer Younus"))
//         )
      

// }

// export default App;

class App extends Component {

  state={
    Person:[
      {name:"Zeena", age:"25"},
      {name:"Zammer", age:'26'}
    ]
  }

  switchHandler=(newName)=>{
    //console.log("Clicky");
    this.setState({
      Person:[
        {name:newName, age:"25"},
        {name:"Zammer", age:'26'}
      ],
      showPersons: false
    }

    )

  }

  namechangeHandler=(event)=>{
    this.setState({
      Person:[
        {name:event.target.value, age:"25"},
        {name:"Zammer", age:'26'}
      ]
    }

    )

  }

deletePersonHandler= (personIndex)=>{
  const persons=this.state.persons;
  persons.splice(personIndex,1);
  this.setState({
    persons:persons
  })

}

togglePersonsHandler=()=>{
  const doesShow=this.state.showPersons;
  this.setState({
    showPersons:!doesShow
  })

}




  render() {
    const style={
      backgroundColor: 'red',

    }

    let persons=null;

    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person name={person.name} age={person.age} click={()=>this.deletePersonHandler(index)}/>
          })}

      {/* <Person 
      name1={this.state.Person[0].name} 
      age={this.state.Person[0].age}
      change={this.namechangeHandler}/>
      <Person 
      name1={this.state.Person[1].name}  
      click={this.switchHandler.bind(this,"lZena")} 
      age={this.state.Person[1].age}
      /> */}
      </div>

      )
    }
    return(
    <div className="App">
      <h1>Hi I am Zameer Younus</h1>
      {persons}
      {/* {this.state.showPersons=== true? <div>
      <Person 
      name1={this.state.Person[0].name} 
      age={this.state.Person[0].age}
      change={this.namechangeHandler}/>
      <Person 
      name1={this.state.Person[1].name}  
      click={this.switchHandler.bind(this,"lZena")} 
      age={this.state.Person[1].age}
      />
      </div>: null} */}
      
      <button style={style} onClick={this.togglePersonsHandler}>Switch</button>
      <button style={style} onClick={this.deletePersonHandler}>Delete</button>
    </div>
      // js compile to this one-> React.createElement('div',{className:"App"},React.createElement('h1',null,"Hi I am Zameer Younus"))
    )
  };

}

export default App;
