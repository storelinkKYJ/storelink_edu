var firebaseConfig = {
  apiKey: "AIzaSyAfM4x6Bnx_87pUuMTGv_0rcLBoNGHkY5w",
  authDomain: "storelink-kyj.firebaseapp.com",
  projectId: "storelink-kyj",
  storageBucket: "storelink-kyj.appspot.com",
  messagingSenderId: "703639509914",
  appId: "1:703639509914:web:686f1ea789d6bcb82df823",
  measurementId: "G-W4625CBG68",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

$(document).ready(function ($) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $("#btnLogIn").css("dsplay", "none");
      $("#btnLogOut").css("dsplay", "block");
    } else {
      $("#btnLogIn").css("dsplay", "block");
      $("#btnLogOut").css("dsplay", "none");
      console.log("아직 로그인 전입니다.");
    }
  });
});

function onLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
