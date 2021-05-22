import React, { Component } from 'react'
import Button  from './style/button'
import BoxA  from './style/boxa'
import BoxB  from './style/boxb'
import './style/app.css'


const myTitle = {
  color: 'blue',
  fontFamily: 'Arial',
  fortSize:'36px',
 'text-align' : 'center'
} 

 class App extends Component {
  render() {
    return(
      <div >
        <h1 style={myTitle}> How to Style in React </h1>
          <Button > Click  me </Button>  

          <BoxB />
          <BoxA />
      </div>
    )
  }
}
export default App

