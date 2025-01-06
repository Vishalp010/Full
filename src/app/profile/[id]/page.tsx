/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

const UserProfilePage = ({params}:any) => {
  return (
    <div>Profilepage
      <p>user {params.id}</p>
    </div>
    
  )
}

export default UserProfilePage