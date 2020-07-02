import './App.css';
import React, { Component } from 'react'
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton.js';
import { evaluate } from 'mathjs';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:''
    }
  }

  InputField = (val)=>{
    this.setState(
      {
        input: this.state.input + val
      }
    )
  }
  EqualFunct = ()=>{
    this.setState({
      input: evaluate(this.state.input)
    })
  }
  
  render() {
    return (
      <div className='app'>
        <div className='calc-wrapper'>
          <Input input={this.state.input}/>
          <div className='row'>
              <Button handleClick = {this.InputField}>7</Button>
              <Button handleClick = {this.InputField}>8</Button>
              <Button handleClick = {this.InputField}>9</Button>
              <Button handleClick = {this.InputField}>/</Button>
          </div>
          <div className='row'>
              <Button handleClick = {this.InputField}>4</Button>
              <Button handleClick = {this.InputField}>5</Button>
              <Button handleClick = {this.InputField}>5</Button>
              <Button handleClick = {this.InputField}>*</Button>
          </div>
          <div className='row'>
              <Button handleClick = {this.InputField}>1</Button>
              <Button handleClick = {this.InputField}>2</Button>
              <Button handleClick = {this.InputField}>3</Button>
              <Button handleClick = {this.InputField}>+</Button>
          </div>
          <div className='row'>
              <Button handleClick = {this.InputField}>.</Button>
              <Button handleClick = {this.InputField}>0</Button>
              <Button handleClick = {()=>{this.EqualFunct()}}>=</Button>
              <Button handleClick = {this.InputField}>-</Button>
          </div>
          <div className='row'>
              <ClearButton handleClear={()=>this.setState({input:''})}>Clear</ClearButton>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App
