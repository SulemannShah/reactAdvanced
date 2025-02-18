import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert , setShowAlert] = useState(false)

  // const toggleAlert = () => {
  //   if (showAlert){
  //     setShowAlert(false)
  //     return;
  //   } setShowAlert (true)
  // }
  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={ () => setShowAlert(!showAlert)} >Click me</button>
       {showAlert && <Alert/>}
    </>
  );
};

const Alert = () => {
return  <div className="alert alert-danger">hello world</div>
}

export default ToggleChallenge;


// this will help to make toggle
