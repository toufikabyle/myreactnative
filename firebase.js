import firebase from "firebase";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyB2Vd0ofhWre8s5Cw4Io3XuvI40K7Vfr7A",
    authDomain: "myreactapp-7262e.firebaseapp.com",
    projectId: "myreactapp-7262e",
    storageBucket: "myreactapp-7262e.appspot.com",
    messagingSenderId: "330975429539",
    appId: "1:330975429539:web:bee0debac2ab01e601d016",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
