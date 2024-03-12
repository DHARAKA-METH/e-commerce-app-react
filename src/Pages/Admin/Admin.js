import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../Store/ReduxSlice/UserSlice'

const Admin = () => {
  const dispatch=useDispatch()
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1>admin</h1>
      <button onClick={()=>dispatch(removeUser())}>LogOut</button>
    </div>
  )
}

export default Admin
