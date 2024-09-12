import React from 'react'
import Card from './Card'
export default function Cards({users,removeCard}) {
  return (
    <div className='h-auto p-5 flex flex-wrap justify-center gap-5'>
      {/* <Card/> */}
      {users.map((item,index)=>(
        <Card id={index} users={item} key={index} removeCard={removeCard}/>
      ))}

    </div>
  )
}
