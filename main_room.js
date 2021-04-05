var firebaseConfig = {
    apiKey: "AIzaSyAJj-v5bTmGRzGzzYQUa7TTR_Z9mNmKSxo",
    authDomain: "project-kwitter-60153.firebaseapp.com",
    databaseURL: "https://project-kwitter-60153-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-60153",
    storageBucket: "project-kwitter-60153.appspot.com",
    messagingSenderId: "403305711291",
    appId: "1:403305711291:web:4d44d8de84e0be511c4b9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom() { room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name-" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
    console.log (name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}