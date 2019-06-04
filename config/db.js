const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyBM7KVek1x2ophBP00PG5xS3Y0IwK-gXHE",
  authDomain: "todolist-c18b2.firebaseapp.com",
  databaseURL: "https://todolist-c18b2.firebaseio.com",
  projectId: "todolist-c18b2",
  storageBucket: "todolist-c18b2.appspot.com",
  messagingSenderId: "1021687435428",
  appId: "1:1021687435428:web:b866b2fd80e93754"
});

module.exports = firebase.database();