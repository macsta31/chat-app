import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBaZYm_VoZyy9OplaK9FUODYA4Bx8L_r4Q",
    authDomain: "chatme-d4a93.firebaseapp.com",
    projectId: "chatme-d4a93",
    storageBucket: "chatme-d4a93.appspot.com",
    messagingSenderId: "957222664949",
    appId: "1:957222664949:web:05dbafc29d7f0cc5e6e3bc",
    measurementId: "G-N9ZD043LVN"
};

const firebaseApp = initializeApp(firebaseConfig)

const storage = getFirestore()

export { firebaseApp, storage }