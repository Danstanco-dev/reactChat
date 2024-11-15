import React from 'react'
import InitialmessageIcon from "../assets/sass/images/messagepng.png"
import "../assets/sass/InfoContainer.scss"

const InfoContainer = () => {
  return (
    <div className='infos-wrapper'>
     <div className="infos">
   <img src={InitialmessageIcon} alt="" />
          <h2>Messenger</h2>
          <p>Select a user to start a conversation.</p>
     </div>
     </div>
  )
}

export default InfoContainer