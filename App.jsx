import React, { useState } from 'react'
function App() {
    const[name, setName] = useState("Aleena");
    const[count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello{name}</h1>
      <button onClick={()=>setName("Developer")}>Change Name</button>
      <button onClick={()=>setCount(count + 1)}>Add</button>
    </div>
  )
}

export default App
//useState allow a react component to remember a value and update the screen when that value changes
