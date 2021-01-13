import React from 'react'; 
import Card from './components/Card';
import Card2 from './components/Card2';
import SRATE from './components/STATE'
import Data from './data.json'
import STATE from './components/STATE';
import Contorl from './Conditonal_Rendaring/Contorl'
import EventHC from './EVENT_HNADLER_CLASS/EvenHC'
import EB from './EVENT_HNADLER_CLASS/EventBaind'
import HOOK from './HOOKSTATE/Hook'


var App = ()=> {

   return(
            <div>
                <div>
                    <h2 className="heading">Todo App</h2>
                    {Data.map((item)=> <Card title={item.title} decs={item.decs}/>)};
                    {<Card2 name="Nazmul" age="19"/>}
                </div>
               
                <div>
                   <STATE />
                </div>
                <div>
                    
                    <Contorl />
                    <EventHC />
                    <EB />
                    <HOOK />
                </div>

            </div>
        )
}

export default App