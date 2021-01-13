import React,{useState} from 'react'


export default function HOOKS() {
    var [count,setCount]=useState(0)

    var Incirment =() => {
        setCount(count+1)
    }
    var Dicirment=()=>{
        setCount(count-1)
    }
    return (
        <div >
            <h2>Useing Hook  </h2>
            <h2> {count}</h2>
            <button onClick={Incirment}>+</button>
            <button onClick={Dicirment} disabled={count===0?true:false}>-</button>
        </div>
    )
}
