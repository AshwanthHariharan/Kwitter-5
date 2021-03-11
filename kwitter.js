  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAI96rEJEFbGx4PqFFpkJxPT8ridhwID2Q",
    authDomain: "lets-chat-web-app-be793.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-be793-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-be793",
    storageBucket: "lets-chat-web-app-be793.appspot.com",
    messagingSenderId: "419670477862",
    appId: "1:419670477862:web:7bb822792d302793552ae7",
    measurementId: "G-RQSNZ3EE1T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function addUser() {

    username = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name" , username);
    
    window.location = "kwitter_room.html";
    
    }