import React, { useState, useEffect, Fragment } from 'react';

const url = 'https://api.github.com/users';


const UseEffectFetchUserData2 = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }

  // useEffect cannot be async await function because async should return a promise
  // and useEffect doesn't return any promise.
  // solution is... use the async await inside a callback function or make one outside useEffect.
  useEffect(()=> {  // useEffect runs after every render. 
     getUsers();
  }, []); // the empty dependency list [] puts a break on re-render and allows to set the data only once.
          // if you are triggering re-render, make sure to attach the dependency list to prevent infinite loop and crash. 
  return (
    <Fragment>
      <h1>github users</h1>
      <ul className="users">
    
        { users.map((user)=> { // user is an object so needs destructuring.
          const {id, login, avatar_url, html_url} = user
          
          return <li key={id}>
              <img src={avatar_url} alt={login}/>
              <div>
                <h4>{login}</h4>
                <a href={html_url} target='_blank'>profile</a>
              </div>
            </li>
        })}
      </ul>
    </Fragment>
  );
};

export default UseEffectFetchUserData2;
