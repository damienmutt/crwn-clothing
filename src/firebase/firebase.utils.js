import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC01a6ApoABHDaO_bd6xM0Uia-wcfQuAkw",
    authDomain: "crwn-db-6d58f.firebaseapp.com",
    databaseURL: "https://crwn-db-6d58f.firebaseio.com",
    projectId: "crwn-db-6d58f",
    storageBucket: "crwn-db-6d58f.appspot.com",
    messagingSenderId: "68568207489",
    appId: "1:68568207489:web:ca2024637f2e588a127d80",
    measurementId: "G-3FNPY9D6GE"
};

/**
 * @name createUserProfileDocument
 * @description Add user into DB if don't exists.
 * @param {*} userAuth User object.
 * @param {*} additionalData (Optional) Extra data. 
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); // metadata to know if user already exists into DB.
    // If not exists into DB.
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                ...additionalData
            })
        } catch (error) {
            console.error(error);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Config Goggle access.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;