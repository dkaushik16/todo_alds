'use client'
import Image from "next/image"
import TodoForm from "./components/TodoForm"
import { useState } from "react"
import TodoItem from "./components/TodoItem";

export default function Home() {

   const [item, setItem]=useState([])

   function addTodo(todo){
     setItem((prev)=>([...prev,todo]))
   }


  return (
   <div className=" bg-slate-800 text-white h-screen ">
     <div>
      <h1 className="text-2xl font-bold text-center mb-8 mt-2">To Do List</h1>
      <div>
      <TodoForm
         onclick={addTodo}  
         />

         </div>

     <div className="flex justify-center mt-6 mb-6 w-full">
      <ul className="w-[30%]">
        {item.map((itr,index)=>(
          <TodoItem input={itr} key={index}/>
        ))}
      </ul>
      </div>
     </div>
     
   </div>
  );
}
