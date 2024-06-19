import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBe8DXBTYGvUvS9gwf9s06zpKekX-Zt9Jk",
    authDomain: "password-vault-714cd.firebaseapp.com",
    projectId: "password-vault-714cd",
    storageBucket: "password-vault-714cd.appspot.com",
    messagingSenderId: "417065178469",
    appId: "1:417065178469:web:ac83a3783faf76affafd8c",
    measurementId: "G-C3H4VWF2NN"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };
  

export { firebase };