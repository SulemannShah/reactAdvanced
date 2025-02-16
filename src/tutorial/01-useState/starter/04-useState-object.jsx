import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name:"suleman" ,
    age: 32 ,
    hobby:"likes to code"
  })

 const displayPerson = () => {
  setPerson({
    name:"namelus" ,
    age: 23 ,
    hobby:"hate to code"
  })
 }
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>{person.hobby}</h4>
    <button className='btn' onClick={displayPerson}>show : {person.name}</button>
    </>
  )
};

export default UseStateObject;
