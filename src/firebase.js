import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyDRSAmeJpUvRZNaiBAPqOQhlf7uKOqkucM",
        authDomain: "mychatbox-d1577.firebaseapp.com",
        projectId: "mychatbox-d1577",
        storageBucket: "mychatbox-d1577.appspot.com",
        messagingSenderId: "765623051030",
        appId: "1:765623051030:web:41f0b55061aa551f0fe637",
        measurementId: "G-JR89ZGNS0L"

});


const db = firebaseApp.firestore();
export default db;
