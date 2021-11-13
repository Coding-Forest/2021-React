import React, { useState, useEffect, Fragment } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchUserData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    /* setUsers(users)  <-- the problem with this code is..

    What is setUsers (useState) doing? 
    - preserves the value
    - then triggers re-render.

    - This will cause an infinite loop because
    setUsers is inside getUsers.
    */
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment className='container'>
      <h3>github user</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url} = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}/>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })};
      </ul>
    </Fragment>
  );
};

export default UseEffectFetchUserData;
