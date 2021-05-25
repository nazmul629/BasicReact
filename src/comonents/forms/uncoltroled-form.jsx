import React, { Component } from 'react'

export default class UncoltroledForm extends Component {
    handleSubmit = e =>{
        e.preventDefault()
        const data = {}
        data.name= e.target.name.value
        data.email = e.target.email.value 
        data.password = e.target.password.value 
        console.log(data);
        e.target.reset()

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='form-control' type = 'text' name='name' placeholder='Nazmul Islam'/>
                    <input className='form-control' type = 'email' name='email' placeholder='test@abc.con'/>
                    <input className='form-control' type = 'password' name='password' placeholder='*******'/>
                    <button type='submit' className='btn btn-dark'> Submit</button>
                </form>
            </div>
        )
    }
}
