importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDM5PzSA3VDEX5DTGuF7Lzv_Zc_C29l0f0",
  authDomain: "lamastock-notifications.firebaseapp.com",
  projectId: "lamastock-notifications",
  messagingSenderId: "349737754751",
  appId: "1:349737754751:web:6cb21493e9a5a8dd551f4a"
});

const messaging = firebase.messaging();
