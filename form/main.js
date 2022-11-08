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
        localStorage.setItem(userName.value,email.value);
        console.log(localStorage.getItem(userName.value));
    }
}