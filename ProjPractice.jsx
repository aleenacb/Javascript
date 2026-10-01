import React, { useState } from 'react'

function ProjectPrac() {
    const[name, setName] = useState("");
    const[message, setMessage] = useState("");

    const handleSubmit = () => {
        if(name == "") {
            setMessage("Please enter your name");
        } else {
            setMessage("Hello" + name + "!Welcome to React");
        }
    };
  return (
    <div>
      <h1>My Project</h1>
      <input
      type='text'
      placeholder='Enter your name'
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <button onClick={(handleSubmit)}>Submit</button>
      <h2>{message}</h2>
    </div>
  )
}

export default ProjectPrac
