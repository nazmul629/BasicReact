import React, { Component } from 'react'


export default class STATE extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count:2
            }
        }

        Increment=()=>{
           this.setState({
               count: this.state.count + 1
           })
        }

        Decrement=()=>{
            this.setState({
                count: this.state.count - 1
            })
         }

    render() {
        const{count} = this.state
        return (
            <div className="StateBox">
               <h1 className="Value"> {count} </h1>
               <button onClick={this.Increment}> + </button>
               <button onClick={this.Decrement} disabled={count==0? true:false}>-</button>
            </div>
        )
    }
}
