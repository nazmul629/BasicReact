import React, { Component } from 'react'
import Bio from './bio'
import Links from './Links'
import './profile.style.css'
import Skills from './skills'
 class Profile extends Component {

    me={
        name:'Nazmul Hossain',
        title:'Fullstack Developer, Entrepreneur and Trainer',
    }
    render() {
        return (
            <div className='Container'>

                    <Bio name={this.me.name} title = {this.me.title}/>
                    <Skills skill1 = 'Pthon'skill2 ='Ruby' skill3='JavaScript'/>
                    <Links />
            </div>
        )
    }
}
export default Profile