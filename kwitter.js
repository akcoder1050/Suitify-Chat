// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBokI9oGc14EpEhvXSqi8A_KS8WD7JASVE",
  authDomain: "chat-suitify-best.firebaseapp.com",
  databaseURL: "https://chat-suitify-best-default-rtdb.firebaseio.com",
  projectId: "chat-suitify-best",
  storageBucket: "chat-suitify-best.appspot.com",
  messagingSenderId: "734897717744",
  appId: "1:734897717744:web:946ba758f7c804f078dd35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FIREBASE LINKS on top

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}