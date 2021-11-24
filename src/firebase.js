import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD761qM53HWVsWWumOiWatZ2gl_3g1OCds",
    authDomain: "place2work-37039.firebaseapp.com",
    projectId: "place2work-37039",
    storageBucket: "place2work-37039.appspot.com",
    messagingSenderId: "627483720982",
    appId: "1:627483720982:web:c0912892c86e6f76e3a437"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const firebase =  {
    app,
    db
}

export default firebase