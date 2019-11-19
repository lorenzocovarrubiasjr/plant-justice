import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('IzPdfxchaMsvx939LMvA').collection('cartItems')
firestore.doc('/users/:id/cartItems/:id')
firestore.collection('users/:id/cartItems')