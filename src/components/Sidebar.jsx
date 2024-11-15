import React, {useState} from 'react'
import "../assets/sass/sidebar.scss"
import Avatar from './Avatar'
import addimg from '../assets/sass/images/expand-img.jpg'

/* import ContactItem from './ContactItem' */
import ChatItem from './ChatItem' 
import Profile from './Profile'

const Sidebar = ({setChat}) => {
const [newChat, setnewChat] = useState(false)
const [onProfile, setonProfile] = useState(false)

const changevalue = (pre) =>{
  setnewChat(!pre)
}

console.log(onProfile)
  return (
    <>
      <div className='sidebar'>
        <Profile open={onProfile} setOpen={setonProfile}/>
        <div className="wrapper">
          <div className="top">
            <div  style={{cursor: 'pointer'}} onClick={() => setonProfile(true)}>
              <Avatar height={45} width={45}/>
            </div>
            <div className="app-icon" onClick={changevalue}>
            <img src={addimg} alt="" />
            </div>
          </div>
          <div className="center">
            <div className="search-wrapper">
              <div className="input-wrapper">
              <img src={addimg} alt="" />
              <input type="text" placeholder='search a conversation'/>
              </div>
            </div>
            <div className="center-wrapper">
             {newChat ? ( <div className="items-wrapper">

             
               <ContactItem key={index}
             
                />  

                 {/*   {[...Array[50].map(() => (contact, index) => (<ContactItem key={index}
             
                />))]}  */}
              </div>
             ) : (
              <div className="items-wrapper">
               <ChatItem setChat={setChat}/>  
              </div>)}

            </div>
          </div>
          <div className="bottom">
            <button className="logout-btn">
            <i class="fa-solid fa-circle-plus"></i> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar