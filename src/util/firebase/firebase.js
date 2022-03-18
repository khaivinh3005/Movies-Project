import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDRLaV_2KIPv9yhRqSU8kVXrgwUrURjFYE",
    authDomain: "fir-demo-c9dda.firebaseapp.com",
    projectId: "fir-demo-c9dda",
    storageBucket: "fir-demo-c9dda.appspot.com",
    messagingSenderId: "72251388913",
    appId: "1:72251388913:web:8c1d88be64eb6428208a50"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
  export const db = getFirestore();
  export const createUserDocumentFormAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users',userAuth.uid);
      const userSnapShot = await getDoc(userDocRef);
      console.log("userSnapShot : ",userSnapShot)
  }