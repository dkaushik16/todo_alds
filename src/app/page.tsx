"use client";
import Image from "next/image";
import TodoForm from "./components/TodoForm";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import SearchTodo from "./components/SearchTodo";

export default function Home() {
  const [itemData, setItemData] = useState<any>([]);

  const [item, setItem] = useState<any>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [id, setId] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [editable, setEditable] = useState(false);
  

  function checkTodo(event: any) {
    setIsSearching(!event.target.val);
    setSearchItem(event.target.value);
    
  }
  const task2 = item.filter((task:any) =>
    task.toLowerCase().includes(searchItem.toLowerCase())
  );

  function addTodo(todo:any) {
    if(todo!==""){
       setId((id) => id + 1);
      const newTask = {
      id: id,
      task: todo,
      };

      setItemData([...itemData, newTask]);
      setItem([...item, newTask.task]);
      console.log(itemData);
     
    }
  }
  function deleteItem(id:number) {
    const newItem = itemData.filter((item:any) => item.id !== id);
    setItemData(newItem);

  }
 

  function handleUpdate(value:any,id:any){

    const index=id
    const newItem :any = itemData.filter((item:any) => item.id!== id)
    // console.log("this is",value)

    const newTask={
      id:id,
      task:value
    }
    
    const newList=[
      ...newItem.slice(0,index),
          newTask,
      ...newItem.slice(index,newItem.length)
       
    ]
     console.log("welcome",newList)
     setItemData(newList)
     setEditable(false)
    
  }
 
 
  return (
    <div className=" bg-slate-800 text-white  min-h-screen ">
      <div>
        <h1 className="text-2xl font-bold text-center mb-4 ">To Do List</h1>
        <div>
          <SearchTodo searchItem={searchItem} checkTodo={checkTodo} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center mb-2 mt-4">
            Add a new Todo
          </h2>
          <TodoForm onclick={addTodo} />
        </div>

        <div className="flex justify-center mt-6 mb-6 w-full">
          <ul className="w-[30%]">  
            {isSearching
              ? task2.map((itr:any, index:any) => {
                  return (
                    <TodoItem
                      item={itr}
                      setItem={setItem}
                      key={index}
                      deleteItem={deleteItem}
                      editable={editable}
                      setEditable={setEditable}
                      
                    />
                  );
                })
              : itemData.map((itr:any, index:any) => {
                  return (
                    <TodoItem
                      item={itr.task}
                      setItem={setItem}
                      key={index}
                      id={itr.id}
                      deleteItem={deleteItem}
                      editable={editable}
                      setEditable={setEditable}
                      handleUpdate={handleUpdate}
                                      />
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );
}
