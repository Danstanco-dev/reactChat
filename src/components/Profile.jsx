import React,{useState} from 'react'
import "../assets/sass/Profile.scss"
import As_close_img from "../assets/sass/images/MinusNew.jpg"
import edit_img from "../assets/sass/images/edit_icon.jpg";
import camera2_img from "../assets/sass/images/camera_img2.jpg";

import Avatar from './Avatar'

const Profile = ({open, setOpen}) => {

  const [onEdit, setonEdit] = useState(false)
  return (
    
    <div className={open? "profileactive": "profile"}>
      <div className="profile-wrapper">
          <div className="profile-topbar">
               <span className="heading">Profile</span>
               <div className="app-icon" onClick={() => setOpen(false)}>
                    <img src={As_close_img} alt="" />
               </div>
          </div>

     {  onEdit ? ( <div className="profile-infos">
            <div className="avatar-wrapper">
            <Avatar src="" height={150} width={150} />
            <img src={camera2_img} alt="" className='cameraIcon'/>
            </div>
            <form onSubmit={() => {}} className="profile-form">
              <input type="text" placeholder='username'/>
              <textarea type="text" placeholder='Write something about YourSelf.'/>
              <div className="profile-action">
                <button onClick={() => setonEdit(false)} className="cancel-btn">Cancel</button>
                <button type="submit" className="save-btn">Save</button>
              </div>
            </form>
            </div>)             
    :
         ( <div className="profile-infos">
            <div className="avatar-wrapper">
            <Avatar src="" height={150} width={150} />
            </div>
            <span className="username">Peter Okoye</span>
            <span className="email">PeterOkoye@gmail.com</span>
            <p className='status'> some description</p>
            <button className='edit-btn' onClick={() => setonEdit(true)}> <img src={edit_img} alt="" /> Profile</button>
          </div> )
          }
      </div>
    </div>
  )
}

export default Profile