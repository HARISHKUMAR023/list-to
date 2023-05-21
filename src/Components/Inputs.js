import React, { useState } from 'react'

// rafce
const Inputs = (props) => {
  const [Inputs, setInputs] = useState("")
  const handlechange = (event)=>{
setInputs(event.target.value)

  };
  return (
    <div className='form'>
<input type='text' onChange={handlechange} value={Inputs}/>
<button onClick={()=>{
  props.additems(Inputs)
  setInputs("")
}}>
  <span>Add</span>
</button>
 </div>
  );
};

export default Inputs