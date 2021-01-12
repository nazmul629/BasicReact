import React from 'react'; 
import Card from './components/Card'
import Data from './data.json'


var App = ()=> {
    var items = [];

    // Using forloop

    // for(var x=0;x<Data.length;x++){
    //     items.push(<Card title={Data[x].title} decs={Data[x].decs}/>)
    // }
    // console.log(Data)

// Useing Map()


   return(
            <div>
                <h2 className="heading">Todo App</h2>

                {Data.map((item)=> <Card title={item.title} decs={item.decs}/>)};
            </div>
        )
}

export default App