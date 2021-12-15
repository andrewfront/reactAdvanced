import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'Random Message'
  })
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(15)
  const [message, setMessage] = useState('Its another example')
  const changeMessage = () => {
    // setPerson({...person, message: 'Hi'})
    setName('Alex')
  }
  return <>
    {/* <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3> */}
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' type='button' onClick={changeMessage}>Change Object</button>
  </>
};

export default UseStateObject;
