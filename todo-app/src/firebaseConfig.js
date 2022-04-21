import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7j-MX_y1vz-bm_X0eEvyhMldZ4S455i4",
    authDomain: "todo-app-e5af7.firebaseapp.com",
    projectId: "todo-app-e5af7",
    storageBucket: "todo-app-e5af7.appspot.com",
    messagingSenderId: "24584469047",
    appId: "1:24584469047:web:918938c3b53f4580ca5db2",
    measurementId: "G-FL99YXH4HT"
  };

  const app = initializeApp(firebaseConfig);
  const data = getFirestore(app);
  export {data};