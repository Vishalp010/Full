/* eslint-disable @typescript-eslint/no-unused-vars */
import {connect} from '@/dbConfig/dbConfig'
import User from "@/models/userModel" 
import { NextResponse,NextRequest } from 'next/server'

connect()


export async function DELETE(request : NextRequest){
  try {
    const reqBody = await request.json()
    const { email } = reqBody
    const user = await User.findOne({email})
    if(!user){
      return NextResponse.json({error:'user doest not exists'},{status:400})
    }
      
    const deletedUser = await User.findOneAndDelete({email})
      if(deletedUser){
        return NextResponse.json({message:'user deleted succesfully'},{status:200})
      }
    else{
      return NextResponse.json({error:"failed to delete user,try again after sometime"},{status:500})
    }
  } catch (error:any) {
    return NextResponse.json({error: error.message || "internal server error" },{status :500})
  }
}