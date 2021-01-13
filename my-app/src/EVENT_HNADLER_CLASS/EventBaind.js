import React, { Component } from 'react'

export default class EventBind extends Component {

constructor(props) {
    super(props);

    this.Inc = this.Inc.bind(this)

    this.state = {
        count:0
    }
}
 Inc(){
    this.setState({
       count:this.state.count+1
    })
}
dec=()=>{
    this.setState({
       count:this.state.count+1
    })
}
    render() {
        return (
            <div>
                <h2>Count Incremnnt Class and Buind useing bind</h2>
                <h2> {this.state.count}</h2>
                <button onClick={this.Inc}> Incrise </button>
            </div>
        )
    }
}
