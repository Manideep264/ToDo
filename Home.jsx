import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsCircleFill, BsFillCCircleFill, BsFillTrashFill } from "react-icons/bs";
import Create from "./Create";
import "./App.css";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []); 

  const handleEdit = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`) 
      .then((result) => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handledelete =(id) =>{
    axios
      .delete(`http://localhost:3001/delete/${id}`) 
      .then((result) => window.location.reload())
      .catch((err) => console.log(err));
  }
  return (
    <div className="todo">
      <h2>ToDo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div id="msg">
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task" key={todo._id}> 
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCCircleFill className="icon" /> 
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>

            <div>
              <span>
                <BsFillTrashFill className="icon" onClick={ () => handledelete(todo._id)} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
