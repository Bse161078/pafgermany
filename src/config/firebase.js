import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGV2aFyDUBbO-aAxsZy3bpNTMKuw4eoPE",
    authDomain: "paf-7cbbd.firebaseapp.com",
    projectId: "paf-7cbbd",
    storageBucket: "paf-7cbbd.appspot.com",
    messagingSenderId: "400660861008",
    appId: "1:400660861008:web:e290c1128eae9e573bc155",
    measurementId: "G-L5T8HM5DRV"
};

let app,db,storage;
const initializeFirebase=()=>{
      if(!app) app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    return app;
}


const getFireStoreDb=()=>{
    if(!db) db = getFirestore(app);
    return db;
}

const getFirebaseStorage=()=>{
    if(!storage) storage = getStorage(app);
    return storage;
}


export {initializeFirebase,getFireStoreDb,getFirebaseStorage}