import React, { Component } from 'react'
 class App extends Component {

  state={
    count : 0
  }

  render() {
    return(
      <div className='App'>
        <h1>Why Do we need state</h1>
        <h1>Count ={this.state.count} </h1>
        <button onClick={()=> {

         this.setState(

           prev => {
             return{
               count: prev.count+1
             };
           },()=>{
            console.log('Clicked', this.state.count)
           })
        
        }}> Increment </button>
      </div>
    )
  }
}
export default App

