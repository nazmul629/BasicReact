import React from 'react'

const Skills = (props) =>{
    return <div className='Skill'>
            <h3>Skills:</h3>
            <ul>
                <li>{props.skill1}</li>
                <li>{props.skill2}</li>
                <li>{props.skill3}</li>
            </ul>
        </div>

}
export default Skills