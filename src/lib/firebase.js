import firebase from "firebase";

import "firebase/firestore";
//import { getAuth } from "firebase/auth";


const firebaseConfig = {
  /*apiKey: "AIzaSyD-xP0DgOachg3mmosbrBbP5aT5y8Y6FDU",
  authDomain: "book-keeper-5c88c.firebaseapp.com",
  projectId: "book-keeper-5c88c",
  storageBucket: "book-keeper-5c88c.appspot.com",
  messagingSenderId: "581713514814",
  appId: "1:581713514814:web:4e955b5f77d3183141dc6f"*/
  apiKey: "AIzaSyAPKi_3VwE-tJcdJ3yqMdQRzBSgmbaOOzM",
  authDomain: "bookkeeper-c1a80.firebaseapp.com",
  projectId: "bookkeeper-c1a80",
  storageBucket: "bookkeeper-c1a80.appspot.com",
  messagingSenderId: "729871722552",
  appId: "1:729871722552:web:55badb41be045b401b9ecd"
};

firebase.initializeApp(firebaseConfig);
//export const auth = getAuth();
const db = firebase.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt:'select_account'

})
const storage = firebase.storage();

export {auth, provider, storage };
export default db;