import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyAp3-Wm80Kj0BhgIgg6xzMaVJ30lZnDPEk",
  authDomain: "complain-forum-32c10.firebaseapp.com",
  projectId: "complain-forum-32c10",
  storageBucket: "complain-forum-32c10.appspot.com",
  messagingSenderId: "138420738965",
  appId: "1:138420738965:web:b4e90b768fb336c9f0b49c"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
