import React, { Component } from 'react'

export default class Inputs extends Component {

    state={
        name:'',
        country:'',
        bio:'',
        birthday:'',
        gender:'',
        agree: false,
        skills: []

    }
    changeHandelar = e => {
      this.setState({
          [e.target.name]:e.target.value
        
      })
  
    }

    changeChackHandelar = e =>{
        this.setState({
            agree:e.target.checked
        })
    }
    skillChangeHandelar = e =>{
        if(e.target.checked){
            this.setState({
                skills:[...this.state.skills, e.target.value]
            }) 

        }else {
            const skills = this.state.skills.filter(skill => skill !== e.target.value)
            this.setState({skills})
        }
    }

    render() {
        const {name, country,bio,birthday, agree, skills } = this.state
        return (
            <div>
                <input
                className='form-control my-2' 
                type="text"
                name='name' 
                placeholder= 'Nazmul Islam'
                onChange={this.changeHandelar}
                value={name}
                 />
                <select 
                className='form-control my-2' 
                name='country'
                onChange={this.changeHandelar}
                value={country}
                >
                    <option> Select Country </option>
                    <option value="Bangladesh">Bangladesh </option>                    
                    <option value="India">India</option>                    
                    <option value="Pakistan">Pakistan</option>                    
                    <option value="Nepal">Nepal</option>                    
                </select>
                <textarea
                 className='form-control my-2'
                 name='bio' 
                 placeholder='Tell me About Yourself'
                 onChange={this.changeHandelar}
                value={bio}
                ></textarea>

                <input 
                onChange={this.changeHandelar}
                value={birthday}
                className='form-control my-2' 
                type='date' name='birthday'
                
                />
                <div>
                    <input 
                    type='radio'
                    name='gender'
                    value='Male'
                    onChange={this.changeHandelar}
                    /> Male

                    <input 
                    type='radio'
                    name='gender'
                    value='Female'
                    onChange={this.changeHandelar}
                    /> Female 

                    <input 
                    type='radio'
                    name='gender'
                    value='Others'
                    onChange={this.changeHandelar}
                    /> Others 

                </div>

                <div>
                     <input 
                      type='checkbox' name='skills'  
                      value='Java' 
                      checked={skills.includes('Java')}
                      onChange={this.skillChangeHandelar}/>   
                   
                      Java
                    <input 
                      type='checkbox' name='skills'  
                      value='JavaScript' 
                      checked={skills.includes('JavaScript')}
                      onChange={this.skillChangeHandelar}/>   
                      JavaScript

                    <input 
                      type='checkbox' name='skills'  
                      value='Python' 
                      checked={skills.includes('Python')}
                      onChange={this.skillChangeHandelar}/>   
                      Python

                    <input 
                      type='checkbox' name='skills' 
                      value='R' 
                      checked={skills.includes('R')}
                      onChange={this.skillChangeHandelar}/>   
                      R
                      
                </div>


                <div>
                     <input type="checkbox" name="agree" checked={agree} onChange={this.changeChackHandelar} /> I agree to all conditions 
                </div>

                <button onClick ={ () => console.log(this.state) }
                    className='btn btn-primary'
                    >Show Data</button>
            </div>
        )
    }
}
