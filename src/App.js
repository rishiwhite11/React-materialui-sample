import React, { Component } from 'react';
import './App.css';
import MaterialForm  from "./Containers/FormBuilder";
import Steppers from './Components/UI/Steppers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Steppers/>
          <MaterialForm/>
        </header>
      </div>
    );
  }
}

export default App;
