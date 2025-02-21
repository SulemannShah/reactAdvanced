// import { useState } from "react";

// const ControlledInputs = () => {
//   const [name , setName] = useState('')

 
//   return <>
//   <form  className="form">
//     <h4>controlled input</h4>
//     <div className="form-row">
//       <label htmlFor='name' className="form-label">name</label>
//       <input type="text" className="form-input" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
//     </div>
//     <div className="form-row">
//       <label className="form-label">email</label>
//       <input type="email" id="email" className="form-input" />
//     </div>
//     <button className="btn btn-block"> submit</button>
//   </form>
//   </>;
// };
// export default ControlledInputs;
import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name , email);
  
 }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>controlled input</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-block" type="submit">Submit</button>
      </form>
    </>
  );
};
export default ControlledInputs;

