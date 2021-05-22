import React, { Component } from 'react'

 class App extends Component {

  state={
    count : 0
  }
  inteevalId=null 

  incrementCount = ()=>{
    this.setState({count: this.state.count+1})

  }

  decrementCount =()=>{
    if(this.state.count > 0){
      this.setState({count: this.state.count-1})
    }
  }
  startTimer =()=>{
    if(this.state.count > 0 && !this.inteevalId){
      this.inteevalId = setInterval(()=>{
        this.setState({count: this.state.count-1},()=>{
          if(this.state.count ===0 ){
            alert('Time Out')
            clearInterval(this.inteevalId)
            this.inteevalId=null
          }
        })
      },1000)
    }
  }

stopTimer = () => {
 if(this.inteevalId){
  clearInterval(this.inteevalId)
  this.inteevalId=null
 }
}

resetTimer =()=>{
  this.setState({count:0})
  clearInterval(this.inteevalId)
  this.inteevalId = null
}

  render() {
    return(
      <div className='App'>
        <h1>Simple Timer</h1>
          <div className="Container">
            <button className='Btn'   onClick={this.decrementCount}>-</button>
            <samp className='Text'>{this.state.count}</samp>
            <button className='Btn' onClick={this.incrementCount}>+</button>
          </div>

           <div className="Container">
             <button className='Btn' onClick={this.startTimer}> Start</button>
             <button className='Btn' onClick={this.stopTimer}> Stop</button>
             <button className='Btn' onClick={this.resetTimer}>Reset </button>
           </div>
      </div>
    )
  }
}
export default App

