import mongoose from "mongoose";

export async function connect(){
  try {
    mongoose.connect(process.env.MONGO_URI!)   //this ! means jo hum aapko dere h wesa kuchh aayga jrur tum tnsn mt lo bs load krlo 
    const connection = mongoose.connection

    connection.on('connected',()=>{
      console.log('mongodb connected succefully')
    })
    connection.on('error',(err)=>{
      console.log('mongodb connection is failed ',err)
      process.exit()
    })
  } catch (error) {
    console.log('something went wrong')
    console.log(error)
  }
}

