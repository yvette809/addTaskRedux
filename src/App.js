import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <>
        <Navigation/>
        </>
       
      </div>
    );
  
  
  }
}
 
export default App;
