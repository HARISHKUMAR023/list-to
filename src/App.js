
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
    <div className="Container">
      <div className='heading'></div>
      <h1 className="text-3xl font-bold underline">
      To-do-list
    </h1>
    <Inputs additems={additems}/>
    <div>
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
