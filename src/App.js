import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import AddTask from './components/AddTask'


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <>
        <Navigation/>
        <AddTask/>
        </>
       
      </div>
    );
  
  
  }
}
 
export default App;
