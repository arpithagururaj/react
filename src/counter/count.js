import React, { useState } from 'react'
// import Count from '.counter/count';
//import logo from './logo.svg';
import '../App.css';
import pizza from './pizza.jpeg'

function Count(props) {
    const [Count,setcount] = useState (0)

    const Decrement =(e)=>{
     setcount(Count-1)

    }

    const Increment = (e)=>{
        setcount(Count+1)
    }

    const PersonDetails = [
        {id: 1, name: "Golden corn", price:150},
        {id: 2, name: "onion", price: 200},
        {id: 3, name: "veggies", price: 300}
]
      const PersonNames = PersonDetails.map(person => 
                     <li key={person.id}>{person.name}:{person.price}</li>)

    

    return(
        <div className='App-header' >
            <div style={{color:'white',textAlign:'center',backgroundColor:'black'}}>
                <h1 >Hello World!!</h1>
                <h2 >welcome!! </h2>
          </div>

           <div style={{textAlign:'center'}} >
              <h2>HOW MANY FOOD ITEMS NEEDED</h2>
             <p style ={{height:'30%',width:'30%',textAlign:'center'}} className ="center"> <img src={pizza} alt="pizza" /></p>
              <h2>{Count}</h2> 
              <button onClick={Decrement}>Decrement</button>
              <button onClick={Increment}>Increment</button>
              <h2>Total:{Count}</h2>
              <ol>{PersonNames}</ol>
            </div>
     
        </div>
    );
        
    
    
}
export default Count;