import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state={
    Person:[
      {name:"Zeena", age:"25"},
      {name:"Lashan", age:'26'}
    ]
  }

  switchHandler=()=>{
    //console.log("Clicky");
    this.setState({
      Person:[
        {name:"ZeenaL", age:"25"},
        {name:"LashanZ", age:'26'}
      ]
    }

    )

  }


  render() {
    return(
    <div className="App">
      <h1>Hi I am Zameer Younus</h1>
      <Person name1={this.state.Person[0].name} age={this.state.Person[0].age}/>
      <Person name1={this.state.Person[1].name} age={this.state.Person[1].age}/>
      <button onClick={this.switchHandler}>Switch</button>
    </div>
      // js compile to this one-> React.createElement('div',{className:"App"},React.createElement('h1',null,"Hi I am Zameer Younus"))
    )
  };

}

export default App;
