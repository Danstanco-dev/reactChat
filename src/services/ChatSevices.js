/* import { getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";
import {auth, db, storage} from "../Firebase_Services/firebaseConfig";
import {collection, getDoc, getDocs, addDoc, arrayUnion, updateDoc,  deleteDoc, doc, setDoc, serverTimestamp, query} from "firebase/firestore"; */
/* import { ref } from "firebase/storage"; */
/* import { updateProfile } from "firebase/auth";


 */
// create user
/* export const createUserAsync  = async() => {
     try {
          const user = {
               username: creds.username,
               email: creds.email,
               password: creds.password,
               desc: "Hello I'm from my country ",
               profile: "",
               createdAt: serverTimestamp(),
          }
          return await setDoc(doc(db, "users", creds.uid), user);
     } catch (error) {
          console.log(error)
     }
}
// update user
export const updateUserAsync = async(updateUser, profileImage) => {
     try {
          const creds = auth.currentUser;
          const userDoc = doc(db, "users", creds.uid);
          // let's update the profile image if not null
          if(profileImage) {
               const location = `/images/users/${creds.uid}/profile`;
               const urls = await uploadFiles([profileImage], location);
               if(urls.length > 0) {
                    updateUser.profile = urls[0];
                    await updateProfile(creds, {
                         photoURL: urls[0].url,
                         displayName: updateUser.username
                    })
               }
          }

          await updateDoc(userDoc, updateUser);
          const snapshot = await getDoc(userDoc);
          return getSnapshotData(snapshot); // pls make sure you watched the firebase app note
     } catch (error) {
          console.log(error)
     }
} */
// delete user

/* export const deleteUserAsync = async(id) => {
     try {
          const userDoc = doc(db, "users", id);
          const res = await deleteDoc(userDoc);
          return res
     } catch (error) {
          console.log(error)
     }
} */

// get all user

/* export const getUsersAsync = async(user) => {
     if(!user) return;
     try {
          // let's get all users without the current auth user
          const snapshot = await getDocs(query(collection(db, "users", where("username", "!=", username))));
          const users = snapshot.docs.map((item) => getSnapshotData(item));
          return users
     } catch (error) {
          console.log(error)
     }
}

// get user
export const getUserAsync = async(id) => {
     try {
          const userDoc = doc(db, "users", id);
          const snapshot = await getDoc(userDoc);
          return getSnapshotData(snapshot)
     } catch (error) {
          console.log(error)
     }
}


// help functions

const uploadFiles = async(files, location) => {
     let filesUrls = [];
     for(const item of files) {
          const storageRef = ref(storage, `${location}${item.filename}`);
          const uploadTask = await uploadBytes(storageRef, item.file);
          const downloadURL = await getDownloadURL(uploadTask.ref);

          filesUrls.push({
               origin: item.origin,
               filename: item.filename,
               url: downloadURL
          });
     }

     return filesUrls
};

export const getSnapshotData  = (snapshot) => {
     if(!snapshot.exists) return undefined;
     const data = snapshot.data();
     return {...data, id: snapshot.id}
} */