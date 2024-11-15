/* import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "../Firebase_Services/firebaseConfig"
import { createUserAsync } from "./ChatSevices";
 */
// login 
/* export const loginAsync = async (creds) => {
     return await signInWithEmailAndPassword(auth, creds.email, creds.password);
}
 */


// register
/*  export const registerAsync = async (creds) => {
   try {
     const res =  await createUserWithEmailAndPassword(auth, creds.email, creds.password, creds.username);
     if(res.user) {
          console.log(res.user)
          await updateProfile(res.user, {displayName: creds.username});
          await createUserAsync({...creds, uid: res.user.uid})
     }
   } catch (error) {
     console.log(error)
   }
 } */

// logout
/* export const logoutAsync = async() => {
  return await signOut(auth)
} */