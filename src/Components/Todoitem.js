import React from 'react'

const Todoitem = (props) => {
  return (
   
        <li className=' text-xl py-2  font-semibold text-rose-900 bg-orange-200'>{props.text}
    </li>
    
    
  )
}

export default Todoitem