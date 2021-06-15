import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBE_zjVzY9Dd77dlNb_7cZaeeZqB46dSAw",
	authDomain: "pometo.firebaseapp.com",
	projectId: "pometo",
	storageBucket: "pometo.appspot.com",
	messagingSenderId: "459963816492",
	appId: "1:459963816492:web:5f49f1b60711db53bb0f89",
	measurementId: "G-454MJWV6YZ",
	databaseURL:
		"https://pometo-default-rtdb.asia-southeast1.firebasedatabase.app"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
