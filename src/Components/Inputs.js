import React, { useState } from 'react'

// rafce
const Inputs = (props) => {
  const [Inputs, setInputs] = useState("")
  const handlechange = (event)=>{
setInputs(event.target.value)

  };
  return (
    <div className='form  mt-20'>
<input type='text' className='bg-orange-200 font-semibold text-base p-3 rounded drop-shadow-lg' onChange={handlechange} value={Inputs}/>
<button 
className='transition ease-in-out delay-150 bg-orange-600  hover:-translate-y-1 p-3 px-7 rounded text-stone-100 ml-4 font-semibold  drop-shadow-lg    hover:bg-sky-500 scale-110 duration-300 shadow-lg shadow-sky-500/50   	' onClick={()=>{
  props.additems(Inputs)
  setInputs("")
}}>                                       
  <span>Add</span>
</button>
 </div>
  );
};

export default Inputs