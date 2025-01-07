/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig"
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect()

export async function GET (request:NextRequest){
  try {
    const userId  = await getDataFromToken(request)
    const user = await User.findOne({_id:userId}).select("-password")   //yaha hume jo jo nhi chahye use minus krdege
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({message:"user find succesfully",data:user})
  } catch (error:any) {
    return NextResponse.json({error:error.message || "internal server error" },{status:500})
  }
}



