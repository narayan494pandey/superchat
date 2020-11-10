import Firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
//we need to somehow seed the database

//weneed a config here
const config = {};
const firebase = Firebase.initializeApp(config)
export {firebase};