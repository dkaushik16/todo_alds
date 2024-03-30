import React, { useState } from "react";

function TodoItem(props: any) {

  const [updateItem,setUpdateitem]=useState("")
  

  function editTodo() {
    props.setEditable(!props.editable);
    
  }

  function updateTodo(event: any) {
    setUpdateitem(event.target.value);
  }

   function handleUpdate_2(){
      props.handleUpdate(updateItem,props.id)

    } 
    


  

  return (
    <div className="flex">
      <div className="w-full flex bg-slate-900 py-4 mt-1 justify-between rounded-sm ">
        {props.editable ?(
        <input
          type="text"
          placeholder={props.item}
          onChange={updateTodo}
          value={updateItem}
          className="rounded-md px-4 py-1  bg-slate-600 w-3/4"
        />
        
        ): (<li className="  px-4 ">{props.item}</li>)}
        {props.editable ? (
          <button
            className=" mx-2 text-red-700"
            onClick={handleUpdate_2}
          >
            save
          </button>
        ) : (
          <button
            className=" mx-2 text-red-700"
            onClick={() => {
              props.deleteItem(props.id);
            }}
          >
            Delete
          </button>
        )}
        
      </div>
      <div className="flex align-center text-red-700 rounded-md">
         <button className=" bg-slate-50 px-2 rounded-lg mt-1 h-[90%]  shadow-slate-50"
               onClick={editTodo}>
                Edit   
          </button>
      </div>
    </div>
  );
}

export default TodoItem;
