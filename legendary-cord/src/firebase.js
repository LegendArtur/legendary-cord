import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBq9gY8FQF87FcOhnA6xmcYZTV4lpivMk4",
    authDomain: "legendary-cord.firebaseapp.com",
    projectId: "legendary-cord",
    storageBucket: "legendary-cord.appspot.com",
    messagingSenderId: "251911306420",
    appId: "1:251911306420:web:9641aea1a145f497f0ebe1",
    measurementId: "G-NXDJY6Q4N9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;