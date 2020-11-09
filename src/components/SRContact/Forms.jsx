import React, { useState } from "react";
import './Forms.css'

function Forms(props) {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");
 
  
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`
             Submitting Name: ${name},
             Submitting Email: ${email}, 
             Submitting Phone: ${phone}, 
             Submitting Message: ${message}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName
      </label><br />
        <input id="box"
          type="text"
          placeholder="Enter your FullName"
          value={name}
          onChange={e => setName(e.target.value)}
        /> <br />
      

      <label><br />
        Email
      </label><br />
        <input id="box"
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br />
      

      <label><br />
        Phone
      </label><br /> 
        <input id="box"
          type="number"
          placeholder="Enter your Moblie No. "
          value={phone}
          onChange={e => setPhone(e.target.value)}
        /><br />
      

      <label><br />
        Message
      </label> <br />  
        <textarea id="box"
          placeholder="Enter your Message" 
          value={message}
          onChange={e => setMessage(e.target.value)}
        /><br />
         
        <input id="submit" type="submit" value="Submit" />
    </form>
  );
}
export default Forms