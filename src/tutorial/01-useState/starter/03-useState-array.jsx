import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {

  const removeSingle = (id) => {
    const newPeople = people.filter((person) => person.id !== id )
   setPeople(newPeople);
  } ;
  const [people , setPeople] = useState(data);
  const removeAll = () => {
    setPeople([])
  };
  return (
  <>
  <h2>useState array example</h2>
  {people.map((person) => {
  return  <div>
      <h3>{person.name}</h3>
      <button type="button" onClick={ () => removeSingle(id)}>remove</button>
    </div>
  })}
  <button className="btn" onClick={removeAll} >Remove All</button>
  </>
  )
  
};

export default UseStateArray;
