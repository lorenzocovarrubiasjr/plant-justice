import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBhsKLC9ORmpVMIuOlPT_x0i6PE6cZUfVU",
    authDomain: "plant-justice.firebaseapp.com",
    databaseURL: "https://plant-justice.firebaseio.com",
    projectId: "plant-justice",
    storageBucket: "plant-justice.appspot.com",
    messagingSenderId: "617918414101",
    appId: "1:617918414101:web:45ace9c9414bb9c0d5fd1c",
    measurementId: "G-T5J7SC9RY8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; 
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const { displayName, email} = userAuth; 
    const createdAt = new Date();
    try {
      await userRef.set({displayName, email, createdAt, ...additionalData});
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ 'display' : 'popup'});
export const signInWithFacebook = () => auth.signInWithPopup(fbProvider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


export default firebase;