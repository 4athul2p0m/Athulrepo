var submit = document.getElementById('btn');
var userName = document.getElementById('name');
var email = document.getElementById('email');

var list = document.getElementById('items');

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

        //serializing userObj for local storage
        var userObj_serialized = JSON.stringify(userObj);
        localStorage.setItem(userObj.name,userObj_serialized);
        
        //create <li> element
        var li = document.createElement('li');
        li.className = 'item';
        //deserialize userObj
        var userObj_deserialized = JSON.parse(localStorage.getItem(userObj.name));
        
        //append textnode with name and email to <li> element
        li.appendChild(document.createTextNode(userObj_deserialized.name));
        //insert space between name and email
        li.appendChild(document.createTextNode('\u00A0 \u00A0'));
        li.appendChild(document.createTextNode(userObj_deserialized.email));

        //append to <ul> element to show on page
        list.appendChild(li);
    }
}