var submit = document.getElementById('btn');
var userName = document.getElementById('name');
var email = document.getElementById('email');

//submit button click event
submit.addEventListener('click',storeDetails);

//submit details function
function storeDetails(e) {
    e.preventDefault();
    
    if(userName.value == '' || email.value == '') {
        alert('Enter valid details!');
    } else {

        var userObj = {
            name: userName.value,
            email: email.value
        };
        console.log(userObj);

        //serializing userObj for local storage
        var userObj_serialized = JSON.stringify(userObj);
        localStorage.setItem(userObj.name,userObj_serialized);
        
        // localStorage.setItem(userName.value,email.value);
        // console.log(localStorage.getItem(userName.value));
    }
}