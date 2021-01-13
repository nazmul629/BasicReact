import React, { Component } from 'react'

export default class EvenHC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ""
        }
    }
    

    handleClick =(e)=>{
        this.setState({
         changedValue : e.target.value
        },()=>{
            console.log(e.target.value)
        }
        )
        
    } 

    render() {

        return (
            <div>
                <input  onChange={this.handleClick} type="text"/>
              <p>  {this.state.changedValue}</p>
            </div>
        )
    }
}
