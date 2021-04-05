import React from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// export const initializeLoginFramework = () => {
//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//     } else {
//         firebase.app(); // if already initialized, use that one
//     }
// }

const Login = () => {
    // const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignin = () => {
        // firebase.auth()
        // .signInWithPopup(googleProvider)
        // .then((result) => {
        //     const credential = result.credential;
        //     const token = credential.accessToken;
        //     var user = result.user;
        // })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     var email = error.email;
        //     var credential = error.credential;
        //     console.log(errorCode, errorMessage, email, credential);
        // });
        console.log("sign in is clicked")
    }
    return (
        <div >
            <button onClick={handleGoogleSignin}>Sign In</button>
        </div>
    );
};

export default Login;