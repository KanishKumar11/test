import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDq851TO1DznZVgMsCbdPRvLcu5pvhlwo",
  authDomain: "cllasifysquad.firebaseapp.com",
  databaseURL: "https://cllasifysquad-default-rtdb.firebaseio.com",
  projectId: "cllasifysquad",
  storageBucket: "cllasifysquad.appspot.com",
  messagingSenderId: "1085537073642",
  appId: "1:1085537073642:web:501bbcbcc374e062e81a93",
  measurementId: "G-157F32MT30"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 