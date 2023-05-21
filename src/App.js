
import { useState } from 'react';
import './App.css';
import Inputs from './Components/Inputs';
import Todoitem from './Components/Todoitem';

function App() {
  const [items, setitems] = useState([])
  const additems = (inputtext)=>{
setitems((previesitem)=>{
  return [...previesitem,inputtext]
});
  };
  console.log(items);
  return (
    <div className="Container text-center">
      <div className='heading'> <h1 className="text-7xl text-blue-600  font-bold drop-shadow-lg">
      To-do-list
    </h1></div>
     
    <Inputs additems={additems}/>
    <div className='mt-5 mx-mymr rounded-md drop-shadow-lg'>
      <ul>
      
        {
          items.map((item,index)=>{
            return(
              <Todoitem key={index} text={item}/>
            )
          })
        }
        </ul>
    </div>

    </div>
  );
}

export default App;
