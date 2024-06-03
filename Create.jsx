import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => window.location.reload()) 
      .catch((err) => console.log(err));
  };

  return (
    <div className="but">
      <input
        type="text"
        id="hello"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" className="bu" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
