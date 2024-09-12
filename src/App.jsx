
import { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form';
import { set } from 'react-hook-form';
function App() {
  let[users,setUsers] = useState([]);
  let handleSubmitFormData=(data)=>{
    setUsers([...users,data]);
  }
  let removeCard=(id)=>{
    setUsers((users)=>users.filter((item,index)=>index!=id));
  }
  return (
    <>
      <Cards users={users} removeCard={removeCard}/>
      <Form handleSubmitFormData={handleSubmitFormData}/>
    </>
  )
}

export default App
