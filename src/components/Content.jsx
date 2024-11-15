import React, { useState } from 'react'
import "../assets/sass/content.scss"
import Avatar from './Avatar'
import menu_img from "../assets/sass/images/menu-img.jpg"
import example_img from "../assets/sass/images/expand-img.jpg"
import { SeeMessages } from '../Data/Messages'
import Message from './Message'
import ImageSlider from './ImageSlider'
import InfoContainer from './InfoContainer'

const Content = ({chat, setChat}) => {
 const [menu, setmenu] = useState(false)
 const [onViewer, setonViewer] = useState(false)
 const [messages, setmessages] = useState(SeeMessages)
 const [msgImages, setMsgImages] = useState([])

 const handleChatClick = () => {
  setChat(false)
 }

 const handlechange = () => {
  setmenu(!menu)
 }
  
 const openImageViewer = (images) => {
      setMsgImages(images);
      setonViewer(true)
 }

 const closeImageViewer = () => {
  setMsgImages([]);
  setonViewer(false)
}
  return (
    <div className={chat ? "content active" : "content"}>
      { chat ? (<div className="wrapper">
        <div className="top">
          <Avatar username={"Marc"} height={45} width={45} />
          <div className="app-icon menu-icon" onClick={handlechange}>
            <img src={menu_img} alt="" />
            
            {menu && (
              <div className="menu-wrapper">
              <span className="menu-item" onClick={handleChatClick}>Close Chat</span>
              <span className="menu-item">Delete Message</span>
              <span className="menu-item"> Delete Chat</span>
            </div>)}
          </div>
        </div>
        <div className="center">
          { msgImages.length > 0 && onViewer ? (<div className="image-viewer-wrapper">
            <ImageSlider images={msgImages} onClose={closeImageViewer} />         
            </div> ) : (
            <div className="messages-wrapper">
            
                 {messages.map((msg) => (<Message key={msg?.id} msg={msg} owner={msg?.owner} openImageViewer={openImageViewer}
                />))}  
            </div>)}
        </div>
        <div className="bottom">
            <div>
               <img src={example_img} alt="" />
               <textarea placeholder='write here...'/>
               <img src={example_img} alt="" />
            </div>
        </div>
      </div>) : (
        <InfoContainer />
      )}
    </div>
  )
}

export default Content