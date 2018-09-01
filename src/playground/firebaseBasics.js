//import * as firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/database'; 
var config = {
    apiKey: "AIzaSyBWQjV97x4Q0l1zLRdJUrox2qm7Rd1AYlo",
    authDomain: "expensetracker-8910b.firebaseapp.com",
    databaseURL: "https://expensetracker-8910b.firebaseio.com",
    projectId: "expensetracker-8910b",
    storageBucket: "expensetracker-8910b.appspot.com",
    messagingSenderId: "411329768356"
  };
  firebase.initializeApp(config);
  const database=firebase.database();
//Adding to the database. set i sused to write the data and ON is used to read the data
//ref refer to the reference, here the root of the database, ref can be like table,or collection

/*   database.ref().set({ 
name:"amrit chhetri",
age:25,
isSingle:false,
location:{
  city:"Bergen",
  country:"Norway"
}
  }).then(()=>{ //here the promise returns nothing
    console.log("data is saved");
  }).catch((error)=>{
console.log("error found " + error);
  }); */


  /* 
  the set() method will override the  previously store data of that reference.
   database.ref().set({ 
age:20;
  }); this will delete the previous data and set the value of that refrence to age:20 

  //to change the value we have to target the specefic property of that reference

   database.ref("age").set(27);
  database.ref("location/city").set("Oslo");
  database.ref("attribute").set({
    height:170,
    weight:70
  }).then(()=>{
    console.log("attrinuted added");
  }).catch((error)=>{
    console.log(error);
  }); */



 /*  //removing data from database


  database.ref("isSingle").remove().then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  }); */


//Updating the data
/* 
 database.ref().update({ //the update updates the root properties only
  age:null, //setting null value to the prop will delete that properties
  isSingle:true,
  job:"software developer" ,  //will add new properties to the ref
  // location:{
   // city:"kathmandu"  //this will update the whole location and remove the country
  //} 
   "location/city":"Oslo"
}).then(function() {
  console.log("update succeeded.")
})
.catch(function(error) {
  console.log("update failed: " + error.message)
});  */


//Fetching data from firebase

/* const onValueChange=database.ref().on("value",(snapshot)=>{
console.log(`${snapshot.val().name} lives in ${snapshot.val().location.city}`);
},(e)=>{
console.log("error is:" + e);
})
//the callback function inside will run everytime the data gets changed . it can be turn off by using off() method;
setTimeout(()=>{
  database.ref("location/city").set("kathmandu");
},2000);

setTimeout(()=>{
  database.ref().off("value",onValueChange);
},5000); */

//Adding expenses to the database
//we are using push to save the expenses because it will generate the unique id for us
/* database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 10950,
  createdAt: 97613498763
});
database.ref('expenses').push({
  description: 'Coffe',
  note: '',
  amount: 10900,
  createdAt: 97612398763
});
database.ref('expenses').push({
  description: 'internet',
  note: '',
  amount: 10500,
  createdAt: 97612348763
}); */


/*  database.ref('expenses').once('value') //fetch data only once
  .then((snapshot) => {
    const expenses = [];

     snapshot.forEach((childSnapshot) => {
       expenses.push({
        id: childSnapshot.key,
         ...childSnapshot.val()
       });
     });

     console.log(expenses);
   }); */

   /* database.ref('expenses').on('value', (snapshot) => {
      const expenses = [];
    
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    
      console.log(expenses);
     }); */
     // child_removed

/* database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}); */  //fires when the child is deleted and returns the deleted child

/* // child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}); //fires when the property of any child gets changed and return the changed child as a whole

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}); */ //fires every time a new child is added. when a new child is added, it will fires for the already added child also