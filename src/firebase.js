
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, 
    getAuth, signInWithPopup, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
}from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6w1obKTNunKvt8aoSrMPV8CM2ycX87wU",
    authDomain: "safe-help-57776.firebaseapp.com",
    databaseURL: "https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "safe-help-57776",
    storageBucket: "safe-help-57776.appspot.com",
    messagingSenderId: "179670199810",
    appId: "1:179670199810:web:ccb86ef4ccc44fdeb0011b", 
      "rules": {
        ".read": false,
        ".write": false
      
    }
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const user = auth.currentUser;

if (user) {
  console.log(user)
} else {
  // No user is signed in.
}

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      window.location = '/dashboard';
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    user,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };