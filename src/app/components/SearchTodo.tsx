import React, { useState } from 'react'

function SearchTodo(props:any) {



  return (
    <div className='flex justify-center text-black '>
        <input
        type='text'
        placeholder='Search a To do'
        className=' rounded-md w-[40%] px-4 py-1 m-6'
        onChange={props.checkTodo}
        value={props.searchItem}
    
        />
       
    </div>
  )
}

export default SearchTodo