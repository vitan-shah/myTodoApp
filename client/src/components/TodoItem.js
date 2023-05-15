import React, { useState } from 'react';
import "../styles/style.css";

function TodoItem({todo,updateTodo}){
  const enabledFieldStyle = {
    pointerEvents : "auto",
    border: "1px solid #ccc",
    borderRadius: "4px",
  }
  const disabledFieldType = {
    pointerEvents : "none",
    border: "none",
    backgroundColor: "#f9f9f9",
  }  
  const updateIcon = <i className="material-icons">edit_note</i>;
  const doneIcon =  <i className="material-icons">done</i>;

  const [style,setStyle] = useState(disabledFieldType);
  const [titleText,setTitleText] = useState(todo.title);
  const [icon,setIcon] = useState(updateIcon);

  const handleUpdate = ()=>{
    if(JSON.stringify(style)===JSON.stringify(disabledFieldType)){
      setStyle(enabledFieldStyle);
      setIcon(doneIcon);
    }else if(JSON.stringify(style)===JSON.stringify(enabledFieldStyle)){
      updateTodo(todo._id,titleText);
      setStyle(disabledFieldType);
      setIcon(updateIcon);
    }
    console.log("out")
  }

  return (
      <li>
        <div className="todoCard">
        <input type='text' value={titleText} onChange={(e)=>setTitleText(e.target.value)} style={style}></input>
        <button className="updateBtn" onClick={handleUpdate}> {icon} </button>
        </div>
      </li>
  );
};


export default TodoItem;