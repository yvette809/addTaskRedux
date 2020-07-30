import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <>
        <Navigation/>
        <AddTask/>
        <TaskList/>
        </>
       
      </div>
    );
  
  
  }
}
 
export default App;
