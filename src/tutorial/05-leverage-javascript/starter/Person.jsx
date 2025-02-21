import React from 'react'
import avattar from '../../../assets/default-avatar.svg'
const Person = ({name , nickName , images }) => {
  const img =images?.[0]?.small?.url ?? avattar;
  return (
   <>
   <img src={img} alt={name} style={{width:'50px'}}/>
    <div>{name}</div>
    <p>Nickname : {nickName}</p>
   </>
  )
}

export default Person
