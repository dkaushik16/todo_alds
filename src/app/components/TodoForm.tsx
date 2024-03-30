import React,{useState} from 'react'

function TodoForm(props:any) {
    const [todo, setTodo]=useState("")

    function setChange(event :any){
        let inVal= event.target.value
        setTodo(inVal)
    }

    
  return (
    <>
    
    <form className=' text-black w-full '>
      <div className='flex flex-col items-center justify-center '>
      <input 
         type="text"
         placeholder='add a to do'
         onChange={setChange}
         value={todo}
         className=' rounded-md w-[40%] px-4 py-1'
          />

          <button className=' rounded-md bg-white text-black w-fit mt-8 p-2 '
              onClick={(e)=>{
                e.preventDefault()
                props.onclick(todo)
                setTodo("")
                
              }} 
               >
              Submit </button>
      </div>
         </form>
    </>
  )
}

export default TodoForm



