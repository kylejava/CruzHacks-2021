function signIn(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;


  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {

    console.log(user['uid']);
    location.href = '/profile';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    document.getElementById('error').innerHTML = errorMessage;
  });
}
