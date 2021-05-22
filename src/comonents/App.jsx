import React, { Component } from 'react'

import classes from './style/app.module.css'


 class App extends Component {


  state={
    name: 'nasda'
  }

  handelButtonClick = e =>{
    console.log(e);
    console.log('I am a cute little Button ');
  }

  changeHandelar = e =>{
    this.setState({
      name:e.target.value
    })
    console.log(e.target.value);
  }

  handelFocus=e=>{
    console.log('I am Fouse Evnet ');
  }
  handelBlur=e=>{
    if(!this.state.name){
      alert('Please Enter Your Name')
    }
    console.log('I am Blur Evnet ');
  }

  render() {
    return(
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}> Event in React</h1>
        <button onClick={this.handelButtonClick} className='Btn'> Click Me</button>
        <br />
        <input
           onChange={this.changeHandelar} 
           className={classes.TextField} 
           value={this.state.name} 
           type="text"
           placeholder="Inter Some Text"
           onFocus={this.handelFocus}
           onBlur={this.handelBlur} 
            />

        { this.state.name && <h3> Welcome, {this.state.name}</h3>}

      </div>
    )
  }
}
export default App

