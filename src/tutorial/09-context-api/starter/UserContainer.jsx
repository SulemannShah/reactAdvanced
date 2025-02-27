import React, { useContext } from 'react'
import { NavbarContext, useAppContext } from './Navbar';

const container = () => {

 const {user , logout} =  useAppContext;


  return (
    <>
    <div className="user-container">
   {user? (<><p>Hello there : {user?.name}</p>
   <button className='btn' onClick={logout}>Logout</button></>
   ):(
    <p>please login</p>
   ) }

    </div>
    </>
  )
}

export default container