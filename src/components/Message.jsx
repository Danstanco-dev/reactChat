import React from 'react'
import "../assets/sass/message.scss"
const Message = ({owner, msg, openImageViewer}) => {
  return (
    <>
     <div className={owner? "message owner":"message"}>
      <div className="message-wrapper">

       {msg?.images.length > 0 && (
        <div className="image-wrapper" onClick={() => openImageViewer(msg.images)}>
              <img src={msg?.images[0]} alt="" /> 
              {msg?.images > 1 && <div className="image-count">{msg?.images.length - 1}+3</div>}
        </div>)}

        <p>{msg?.message}</p>
      </div>
      <span className='timeline'>Just now</span>
     </div>
    </>
  )
}

export default Message