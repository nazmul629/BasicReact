import React, { Component } from 'react'
import FunctionalCompnent from './FunctionalCompnent'
import Profile from './profile'
import Skills from './profile/skills'
import MyProps from './props/index'

const ChildComponet = (props)=>{
  return <div>
      {props.children}
  </div>
}

 class App extends Component {
  render() {
    return (
      <div className ="App">

        <Profile />
        
   

        <ChildComponet>
          <h2> Hello This is Somethng </h2>  
        </ChildComponet>
        
      </div>
    )
  }
}
export default App

const AnotherFunctionalComponnt=()=>{
  return <h1> This is a Arrow Functions </h1>
}