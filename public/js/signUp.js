
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBL8TblHxrtRA-f-_Vt5qgobTY2El-ZSSQ",
    authDomain: "iqraa-form.firebaseapp.com",
    databaseURL: "https://iqraa-form.firebaseio.com",
    projectId: "iqraa-form",
    storageBucket: "iqraa-form.appspot.com",
    messagingSenderId: "750019900914",
    appId: "1:750019900914:web:716a40819812446e21a76b",
    measurementId: "G-RTB2C8RJ61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.auth.Auth.Persistence.LOCAL;

function signin(){
    var name = $("#Uname").val();
    var pass = $("#pass").val();

    console.log(name);
    console.log(pass);
   var result= firebase.auth().signInWithEmailAndPassword(name,pass);

   result.catch(function(error){
       var errorCode=error.code;
       var errorMessage=error.message;

       window.alert("Message: "+errorMessage);
   });
}


function signout(){
    firebase.auth().signOut()
    .then(function(){
        console.log('success')
    },function(error){
        console.log('faild')
    });
}

function signup(){

  //  var name = $("#name").val;
    var email = $("#mail").val();
    var password=$("#password").val();
    var Cpassword = $("#confirmpassword").val();
    console.log(email);
    console.log(password);
    console.log(Cpassword);

    var result = firebase.auth().createUserWithEmailAndPassword(email,password);

    result.catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);

        window.alert("Message: " + errorMessage);
    });

}

function resetPassword(){

    var auth=firebase.auth();
    var mail = $("#mail").val();

    auth.sendPasswordResetEmail(mail).then(function(){

        window.alert("Email has been sent to you ,please check it ")

    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);

        window.alert("Message: " + errorMessage);

    });

}
