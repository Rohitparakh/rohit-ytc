import firebase from 'firebase/app';

import 'firebase/auth'


// firebase for rohitparakhus 
// change api key is api.js
// const firebaseConfig = {
//    apiKey: "AIzaSyB8aVOiN6b2xqUqtOloG0AW6qwXq38521g",
//    authDomain: "rohit-yt-clone.firebaseapp.com",
//    projectId: "rohit-yt-clone",
//    storageBucket: "rohit-yt-clone.appspot.com",
//    messagingSenderId: "84363794985",
//    appId: "1:84363794985:web:fd4c86550ca92a4ffc9a38"
//  };


// firebase for rohitparakh4
// change api key is api.js
 const firebaseConfig = {
   apiKey: "AIzaSyBlVYUieQoBR1R1s1Vz-ZlTfi3E98tNewA",
   authDomain: "clone-rohit.firebaseapp.com",
   projectId: "clone-rohit",
   storageBucket: "clone-rohit.appspot.com",
   messagingSenderId: "295292718033",
   appId: "1:295292718033:web:ca6db3697ab45acec7aef0"
 };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()