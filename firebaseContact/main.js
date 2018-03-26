// Initialize Firebase
var config = {
    apiKey: "AIzaSyDKp-ECpwo4WmVoxaYc6_kiYhHY46wg9K0",
    authDomain: "contactform-90de2.firebaseapp.com",
    databaseURL: "https://contactform-90de2.firebaseio.com",
    projectId: "contactform-90de2",
    storageBucket: "contactform-90de2.appspot.com",
    messagingSenderId: "977677419596"
  };
  firebase.initializeApp(config);

//Reference Messages Collection
var messagesRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
//Save Message
    saveMessage(name, company, email, phone, message);

    //Show Alert
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert After 3 Seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    },3000);
//Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}