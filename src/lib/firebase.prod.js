import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';
//we need to somehow seed the database

//weneed a config here
const config = {
    apiKey: "AIzaSyDEhVc8sR91pwC9ql_yE7OlpcZBCif6fC8",
    authDomain: "netflix-app-77ff2.firebaseapp.com",
    databaseURL: "https://netflix-app-77ff2.firebaseio.com",
    projectId: "netflix-app-77ff2",
    storageBucket: "netflix-app-77ff2.appspot.com",
    messagingSenderId: "1054296959102",
    appId: "1:1054296959102:web:024e68a9775c380ff8102f"
  };
const firebase = Firebase.initializeApp(config)
//seedDatabase(firebase);
export {firebase};