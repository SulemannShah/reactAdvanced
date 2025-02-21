import { useState } from "react";
import {data} from "../../../data"
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users , setUsers] = useState(data)
  
 const handleSubmit = (e) => {
  e.preventDefault();
  if(!name) return;
  const fakeID = Date.now ();
  const newUser = { id: fakeID , name: name};
  const updatedUsers = [...users , newUser]
  setUsers(updatedUsers)
  
  setName('')
  
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
       
        <button className="btn btn-block" type="submit">Submit</button>
      </form>
      <h4>Users</h4>
      {users.map((user )=>{
        return(
        <>
        <div key={user.id} {...user}>
          <h4>{user.name}</h4>
        </div>
        </>
        )
      })}
    </>
  );
};

export default UserChallenge;
