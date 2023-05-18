import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDT0anA1znQbfR9gP8gwSS3lvj8WiMau6M",
    authDomain: "my-final-minor-project.firebaseapp.com",
    projectId: "my-final-minor-project",
    storageBucket: "my-final-minor-project.appspot.com",
    messagingSenderId: "401133211826",
    appId: "1:401133211826:web:f582c2701af9f4ca5e39ab"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export {auth, db};
//jdnjdnjn