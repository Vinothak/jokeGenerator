import React, { Component } from 'react';
import logo from './logo.svg';
import title from './title.png'
import { Button } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import './App.css';
//import Emoji from './components/Emoji'
import Jokes from './components/Jokes'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle:false
    }
  }

getAnswerChild=()=>{

      this.refs.jokeChild.getAnswer();
     this.setState({
       toggle:false
     })
}

showPunchChild=()=>{
  this.refs.jokeChild.showPunch();
  this.setState({
    toggle:true
  })
}

render(){
  return (
    <div className="App">
         <img style={{marginTop:'20px'}}src={title}></img>
         <div className='panel'>
         <Jokes style={{marginTop:'10px',color:'green'}}ref='jokeChild'></Jokes>
         </div>
         {
           this.state.toggle===true? <Button  id='snackbar' className='show' onClick={this.getAnswerChild}>getJoke</Button> 
          
:<Button  id='snackbar' className='hide' onClick={this.getAnswerChild}>getJoke</Button>}
 {this.state.toggle===false?
 <Button id='showAnswer' className='show' onClick={this.showPunchChild}>showPunch</Button>:
 <Button id='showAnswer' className='hide' onClick={this.showPunchChild}>showPunch</Button>}
    </div>
  );
}
}

