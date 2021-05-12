// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: "AIzaSyDtjtZKJWoXq06nkPO-GEiXY0-jgs9tWdo",
    authDomain: "kwitter-a31cf.firebaseapp.com",
    databaseURL: "https://kwitter-a31cf-default-rtdb.firebaseio.com",
    projectId: "kwitter-a31cf",
    storageBucket: "kwitter-a31cf.appspot.com",
    messagingSenderId: "790695396489",
    appId: "1:790695396489:web:f1e3b21256fd4c54c5f258",
    measurementId: "G-57JMRCXVS7"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  user_name = localStorage.getItem("user_name").innerHTML = "welcome " + user_name + "!";

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
  }

  function getData() {
      firebase.database().ref("/").on('value', function(snapshot){
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
childKey = childSnapshot.key;
Room_names = childKey;
console.log("room name = " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML = row;

          })     
      })
  }

  getData();

  function redirectToRoomName(name)
  {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }

  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
