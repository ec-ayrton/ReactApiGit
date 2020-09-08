import React, { useState } from 'react';

import GitHubImage from './github-mark.png';
import './App.css';

function App() {
  
  const[search, setSearch] = useState('');
  const[userData,setUserData]= useState();

  const handleSubmit =(event)=>{
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
    .then(Response=> Response.json())
    .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) =>{
    
    setSearch(event.target.value)
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>GitHub User</label>
          <div className="input-group">
            <input 
              type="text" className= "form-control"
              required
              value={search}
              onChange={handleChange}
              />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-sucess">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData &&(
            <img 
            src={GitHubImage}
            className="responsive rounded by circle"
            alt=""
            height="100px"
          />
        )}
        {userData &&(
          <div>
            <img 
            src={userData.avatar_url}
            className="responsive rounded by circle"
            alt=""
            height="100px"
            />
            <h1 className="pt-10">
              <a href="" target="_new">
                {userData.name}
               </a>
            </h1>
            <h3>{userData.location}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;




















