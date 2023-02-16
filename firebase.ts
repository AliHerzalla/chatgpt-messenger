import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkOn_U9vSY7NsGTwAly3I-b0pNsmVzxQo",
  authDomain: "chatgpt-ai-messenger.firebaseapp.com",
  projectId: "chatgpt-ai-messenger",
  storageBucket: "chatgpt-ai-messenger.appspot.com",
  messagingSenderId: "152866213151",
  appId: "1:152866213151:web:67e80b5f4b997c8911b42a"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const DB = getFirestore(app)
export {DB}