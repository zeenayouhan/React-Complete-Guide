import React, { useState, Component } from 'react';
import Person from './Person/Person';
import './App.css';




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
      ]
    }

    )

  }


  render() {
    return(
    <div className="App">
      <h1>Hi I am Zameer Younus</h1>
      <Person name1={this.state.Person[0].name} age={this.state.Person[0].age}/>
      <Person name1={this.state.Person[1].name}  click={this.switchHandler.bind(this,"lZena")} age={this.state.Person[1].age}/>
      <button onClick={()=>this.switchHandler("Zeenaaaa")}>Switch</button>
    </div>
      // js compile to this one-> React.createElement('div',{className:"App"},React.createElement('h1',null,"Hi I am Zameer Younus"))
    )
  };

}

export default App;
