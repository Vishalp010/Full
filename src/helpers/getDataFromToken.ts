/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken =(request:NextRequest)=>{
  try {
      const token = request.cookies.get('token')?.value || ""
      const encodedToken:any = jwt.verify(token,process.env.TOKEN_SECRET!)
      return encodedToken.id    // yaha hum sirf token me se uski id bhejre h poora token nahi
  } catch (error:any) {
    return NextResponse.json({message:error.message},{status:400})
  }
}