import React,{Component} from 'react'

class Card2 extends Component{

    Today = new Date().getDate();
    ThisMonth =  new Date().getMonth()

    render(){ return(
               <div className="Card2">
                   <h2>{this.props.name}</h2>
                   <h2>{this.props.age}</h2>
                   <h2>{this.Today,this.ThisMonth}</h2>
               </div>     
            )
        }
}
export default Card2;