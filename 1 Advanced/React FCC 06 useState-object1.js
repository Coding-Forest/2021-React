import React, { Fragment, useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'piotre', 
    age:'33', 
    message:'Привет!',
  });
  console.log(person);

  const changeMessage = () => {
    setPerson({...person, name:"Peter", message:"Hi there!"}); 
  }

  return (
    <Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Translate message</button>
    </Fragment>
  )
};

export default UseStateObject;