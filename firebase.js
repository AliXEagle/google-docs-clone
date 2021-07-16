import firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'docs-clone-738dc.firebaseapp.com',
	projectId: 'docs-clone-738dc',
	storageBucket: 'docs-clone-738dc.appspot.com',
	messagingSenderId: '102759769916',
	appId: process.env.FIREBASE_API_ID,
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };
