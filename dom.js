var header = document.getElementById('main-header');
//add border to header
header.style.border = 'solid 3px #000';

var additems = document.getElementById('list-header');
console.log(additems);
//set additems font to bold
additems.style.fontWeight = 'bold';
//set font color of additems to green
additems.style.color = 'green'

//items store list of items of class 'list-group-item
var items = document.getElementsByClassName('list-group-item');

//make 3rd element of list have green background color
items[2].style.backgroundColor = 'green';

//make all elements of list have bold font
for(var i=0;i<items.length;i++) {
    items[i].style.fontWeight = 'bold';
}