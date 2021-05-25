import React, { Component } from 'react'

export default class ControledForm extends Component {
     state ={
         name:'',
         email:'',
         password:'',
     }

     handleChange = e =>{
         this.setState({
             [e.target.name]: e.target.value
         })
     }

    handleSubmit = e =>{
        e.preventDefault()
       
        console.log(this.state);
        e.target.reset()
        this.setState({name:'', email:'', password:''})

    }
    render() {
        const {name,email,password} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='form-control' type = 'text' name='name' placeholder='Nazmul Islam' value={name} onChange = {this.handleChange}/>
                    <input className='form-control' type = 'email' name='email' placeholder='test@abc.con' value={email} onChange = {this.handleChange} />
                    <input className='form-control' type = 'password' name='password' placeholder='*******' value={password} onChange = {this.handleChange}/>
                    <button type='submit' className='btn btn-dark'> Submit</button>
                </form>
            </div>
        )
    }
}
