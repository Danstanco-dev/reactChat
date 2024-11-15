import React from 'react'
import Avatar from './Avatar'

const ChatItem = ({setChat}) => {
  const handleChatClick = () => {
   setChat(true)
  }
  return (
    <div className='chat-item' onClick={handleChatClick}>
      <Avatar src="" height={55} width={55} />
      <div className="chat-item-infos">
        <div className="avatar-infos">
          <span className="username"> John Doe </span>
          <span className="timeline"> 3 days ago </span>
        </div>
        <p className="last-message"> Say Hi! to John Doe</p>
        
      </div>
      </div>

  )
}

export default ChatItem