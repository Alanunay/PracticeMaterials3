import {useState} from 'react'

export const Try = () => {
    const[message, setMessage] = useState("")
    const handleChange = (event) => {
        setMessage(event.target.value)
    }
  return (
    <div>
      <input type="text" placeholder="Type a message" value={message}  onChange={handleChange}/>
      <button onClick={handleChange}>Click me</button>
      
    </div>
  )
}