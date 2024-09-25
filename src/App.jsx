import React, { useState, useEffect } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storedName, setStoredName] = useState("");
  const [storedEmail, setStoredEmail] = useState("");


  useEffect(() => {
    const savedName = sessionStorage.getItem("name");
    const savedEmail = sessionStorage.getItem("email");
    if (savedName) setStoredName(savedName);
    if (savedEmail) setStoredEmail(savedEmail);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    setStoredName(name);
    setStoredEmail(email);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{color:"blue"}}>Localbox Miner</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

     
      <div style={{ marginTop: "20px" }}>
        
        <p>Name: {storedName}</p>
        <p>Email: {storedEmail}</p>
      </div>
    </div>
  );
};

export default App;
