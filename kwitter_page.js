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

  room_name = localStorage.getItem("room_name");

  function send() {

msg = document.getElementById("msg").value;

firebase.database().ref(room_name).push({

name:user_name,

message:msg,

like:0

});

document.getElementById("msg").value = "";
 
  }

  function getData() {
    
    firebase.database().ref("/"+room_name).on('value',
    
    function(snapshot) { document.getElementById("output").innerHTML = "";
    
    snapshot.forEach(function(childSnapshot) { 
      
      childKey = childSnapshot.key;
      
      childData = childSnapshot.val();
      
      if(childKey != "purpose") {
        
        firebase_message_id = childKey;
        
        message_data = childData;
        
        //Start code
        
console.log(firebase_message_id);

console.log(message_data);

like = message_data['like'];

message = message_data['message'];

name = message_data['name'];

h4 = "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"

h4_message = "<h4 class='message_h4'>"+message+"</h4>"

button = "<button class='btn btn-warning' id="+firebase_message_id+"value ="+like+" onclick='updateLike(this.id)'>";

span = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row = h4 + h4_message + button + span;

document.getElementById("output").innerHTML += row;
        
        //End code

   } }); }); }
   
   getData();

function updateLike(message_id) {

  console.log("Hi")

console.log(message_id);

button_id = message_id;

likes = document.getElementById(button_id).value;

 updatelike = Number(likes) + 1; 

console.log(updatelike);

firebase.database().ref(room_name).child(message_id).update({

  like:updatelike

});

}

function logout() {

  localStorage.removeItem("user_name");

  localStorage.removeItem("room_name");

  window.location = "login.html";
  
  }