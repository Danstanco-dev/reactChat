import React, { useState } from 'react'
import "../assets/sass/messager.scss"
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"

const Messager = () => {
  const [chat, setChat] = useState(false)
  return (
    <div className="messager">
     <Sidebar setChat={setChat} />
      <Content chat={chat} setChat={setChat} /> 
    </div>
  )
}

export default Messager