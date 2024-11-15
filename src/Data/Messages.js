import Img1 from "../assets/sass/images/admin-chart-logo.jpg"
import Img2 from "../assets/sass/images/profile-img.jpg"
import Img3 from "../assets/sass/images/bot-user-img.jpg"

export const SeeMessages = [
     {id:1, owner: false, message: "Hi", images: []},
     {id:2, owner: true, message: "Hi!, How are you doing", images: []},
     {id:3, owner: false, message: "Yea I am fine", images: []},
     {id:4, owner:false, message: "and you I hope your also fine", images: []},
     {id:5, owner: true, message: "Hey here are some images", images: [Img1,Img2,Img3]},
     {id:6, owner: false, message: "So Cool", images: []},
     {id:7, owner: false, message: "I Got One ", images: [Img2,Img3, Img1]},
     {id:8, owner: true, message: "Alright we will meet in our hideout", images: []}
]