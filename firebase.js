import firebase from "firebase";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyBEogSPesCwVZzmqnnZlalXQWcPduXzR3Y",
    authDomain: "reactweb-a1edc.firebaseapp.com",
    projectId: "reactweb-a1edc",
    storageBucket: "reactweb-a1edc.appspot.com",
    messagingSenderId: "432584552866",
    appId: "1:432584552866:web:c67a5cd2f28791774c02fb",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;