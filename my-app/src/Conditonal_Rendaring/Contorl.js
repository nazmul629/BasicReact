import React, { Component } from 'react'
import HomePage from './homepage'
import LogIn from './login'

export default class Contorl extends Component {

    constructor(props) {
        super(props)
        this.state = {
             Loggedin:true

        }
    }
    

    render() {

      return  this.state.Loggedin ?<LogIn /> :<HomePage />
    }
}
