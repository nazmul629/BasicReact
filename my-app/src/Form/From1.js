import React,{useState} from 'react'
import sty from './form1.module.css'

export default function From1() {

    const[name, setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const handeleChageName=(e)=>{
       setName(e.target.value)
    }
    const handeleChageEmail=(e)=>{
       setEmail(e.target.value)
    }
    const handeleChagePassWord=(e)=>{
        setPassword(e.target.value)
    }
    const handelSubmit=(e)=>{
        var userInfo={
            name,email,password
        }
       
        console.log(userInfo)
        e.preventDefault()
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handelSubmit}>
               <div>
                    <lable htmlFor="name" >Name:</lable>
                    <input value={name} className={sty.inputBox} onChange={handeleChageName} type="text" name="name" id="name" required/>
                </div>    
                <div>
                    <lable htmlFor="email" >Email:</lable>
                    <input value={email} className={sty.inputBox}  type="eamil" name="email" id="eamil" onChange={handeleChageEmail} required/>
                </div>
                <div>
                    <lable htmlFor="email" >Password:</lable>
                    <input value={password} className={sty.inputBox} type="password" name="password" id="password"onChange={handeleChagePassWord}  required/>
                </div>
                <button className={sty.btn}>Submit </button>
            </form>

        </div>
    )
}
