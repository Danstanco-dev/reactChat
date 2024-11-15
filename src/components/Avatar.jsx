import React from 'react'
import NoAvatar from "../assets/sass/images/shopping_logo.jpg";


const Avatar = ({src, username,height,width}) => {
  return (
     <div className="d-flex-row">
     <img src={src ? src : NoAvatar} alt="" style={{
          height:`${height}px,`,
          width: `${width}px`,
          objectFit: "cover",
          borderRadius: "0.5rem"
     }}/>
   {username && (<span style={{fontSize: "1rem"}} className='username'>{username? username : "No User Yet"}</span>)}
    </div> 
  )
}

export default React.memo(Avatar)