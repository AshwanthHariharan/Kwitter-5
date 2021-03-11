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

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addroom() {

room_name = document.getElementById("room_name").value;

localStorage.setItem("room_name", room_name);

firebase.database().ref("/").child(room_name).update({

purpose:"adding " + room_name

});

window.location = "kwitter_page.html";

document.getElementById("room_name").value = ""; 

  }

  function getData() {firebase.database().ref("/").on('value',

function(snapshot) {document.getElementById("output").innerHTML =

"";snapshot.forEach(function(childSnapshot) {childKey =

childSnapshot.key;

 Room_names = childKey;

 //Start code

div = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";

document.getElementById("output").innerHTML += div; 

 //End code

 });});}

getData();

function redirectToRoomName(name) {

  console.log(name);

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}

function logout() {

localStorage.removeItem("user_name");

localStorage.removeItem("room_name");

window.location = "login.html";

}