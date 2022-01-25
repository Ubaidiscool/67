import firebase from 'firebase';

// add SDK Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTz1S13kt87xYHgCWYyFv5oaWLZD4pB6E",
    authDomain: "team-voting-27f94.firebaseapp.com",
    projectId: "team-voting-27f94",
    storageBucket: "team-voting-27f94.appspot.com",
    messagingSenderId: "926383696743",
    appId: "1:926383696743:web:be2fc1867d08964b09ddc2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();