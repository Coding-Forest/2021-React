import React, { Fragment, useState } from 'react';

const UseStateMultipleValues = () => {
  const [person, setPerson] = useState({
    name:'Пётр', 
    age:'33', 
    message: null,
  });

  const [name, setName] = useState("Peter")
  const [age, setAge] = useState(34)
  const [message, setMessage] = useState("Привет!")


  const changeMessage = () => {
    // setPerson({...person, name:"Peter", message:"Hi there!"});
    setMessage("Hi hi")
  }

  return (
    <Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>Translate</button>
    </Fragment>
  )
};

export default UseStateMultipleValues;
