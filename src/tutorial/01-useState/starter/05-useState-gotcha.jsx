import { useState } from "react";

const UseStateGotcha = () => {
 const [value , setValue] = useState(0)
 const increase = () => {
  setTimeout( () => {
  setValue( (currentValue) => {
    return    currentValue + 1
  })
  } , 2000)
 }
 
 
 return(
  <>
  <h2>useState "gotcha"</h2>
  <h2>{value}</h2>
  <button className="btn" onClick={increase} >click to increase</button>
  </>
  
  )
};

export default UseStateGotcha;
