//YOUR FIREBASE LINKS
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

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(message_data)
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        row = "<h4> " + name + "<img class='user_tick' src='tick.png'> class='message_h4'>" + message + "</h4><button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'> class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        document.getElementById("output").innerHTML = row;
                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id) {
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      likes_in_number = Number(likes) + 1;
      console.log(likes_in_number)

      firebase.database().ref(room_name).child(message_id).update({
            like: likes_in_number
      })
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html")
}