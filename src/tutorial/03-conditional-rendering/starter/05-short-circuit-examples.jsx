import { useState } from 'react';


 

const ShortCircuitExamples = () => {

 





  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <>
      <div>
        {/* <h2> {text || 'default value'}</h2>
    {text && (
      <div>
        <h2>name</h2>
      </div>
    )} */}
        <h2>Ternary Operator</h2>
        <button className="btn">{isEditing ? "he is editing" : "no"}</button>
      </div>
      {user ? <div><h4>hello there {user.name}</h4></div> : <h5>please login</h5>}
    </>
  );
};

export default ShortCircuitExamples;
