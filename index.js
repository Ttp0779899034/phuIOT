// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //Điền thông tin Firebase config của cá nhân vào đây
   apiKey: "AIzaSyCvrDQWjTtM1LXXAzqEwJiWYgYL-CuHdXM",
  authDomain: "tran-thanh-phu-ca65c.firebaseapp.com",
  databaseURL: "https://tran-thanh-phu-ca65c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tran-thanh-phu-ca65c",
  storageBucket: "tran-thanh-phu-ca65c.appspot.com",
  messagingSenderId: "178646856803",
  appId: "1:178646856803:web:00f86763419fe0e5d0f456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends('Number');
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(ph){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, ph), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'Number' + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
