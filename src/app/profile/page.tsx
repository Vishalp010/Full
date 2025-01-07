/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Toaster,toast } from 'react-hot-toast'

const ProfilePage = () => {
  const router = useRouter()
  const logout = async ()=>{
      try {
        await axios.get('/api/users/logout')
        toast.success("logout succefully" )
        router.push('/login')
      } catch (error:any) {
        console.log(error.message)
        toast.error(error.message)
      }
  }


  const [data,setData] = useState('nothing')

  const getUserDetails = async ()=>{
    const res = await axios.get('/api/users/me')
    setData(res.data.data._id)   //yaha jo normal line thi wo thi res.data lekin humne variable b data hi declrea kra isliy res.data.data and usme se hume id chahye to isliy ._id

  }

  return (
    <div  className='flex justify-center items-center h-screen w-screen flex-col ' >
      Profilepage
      <hr/>
      <h2>{data === "nothing" ? "nothing": <Link href={`/profile/${data}`}>{data}</Link> }</h2>
      <button 
      className=' w-[30%] h-[10%] bg-slate-600 rounded-md text-white '  
      onClick={logout}
      >Logout</button>
      <button 
      className=' w-[30%] h-[10%] bg-green-500 rounded-md text-white '  
      onClick={getUserDetails}
      >GetUserData</button>
      <Toaster/>
    </div>
  )
}

export default ProfilePage