import React from 'react'

export default function Card({users,removeCard,id}) {
  return (
    <div className='bg-sky-400 h-auto w-36 text-center p-4 rounded-lg'>
     <div className="bg-red-500 h-12 w-12 rounded-full mx-auto">
        <img src={users.image} alt="" className='w-full h-full rounded-full'/>
     </div>
     <h3 className='text-lg font-medium'>{users.name}</h3>
     <p className='text-gray-500 text-sm'>{users.email}</p>
     <button onClick={()=>removeCard(id)} className='mt-3 text-white bg-red-600 rounded-md px-2 py-1'>Remove it</button>
    </div>
  )
}
