import React from 'react'

const MyProps = (props)=> {
    console.log('Myprops',props.name) 

    return (
        <div>
            <h2>My Name is {props.name} </h2>
        </div>
    )
}

export default MyProps
