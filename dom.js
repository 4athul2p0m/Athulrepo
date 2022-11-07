// var header = document.getElementById('main-header');
// //add border to header
// header.style.border = 'solid 3px #000';

// var additems = document.getElementById('list-header');
// console.log(additems);
// //set additems font to bold
// additems.style.fontWeight = 'bold';
// //set font color of additems to green
// additems.style.color = 'green'

// //items store list of items of class 'list-group-item
// var items = document.getElementsByClassName('list-group-item');

// //make 3rd element of list have green background color
// //items[2].style.backgroundColor = 'green';

// //make all elements of list have bold font
// for(var i=0;i<items.length;i++) {
//     items[i].style.fontWeight = 'bold';
// }

// //using getElementByClassName

// var item = document.getElementsByClassName('new-list-item');
// item[0].style.fontWeight = 'bold'

// //using getelementbytagname

// var li = document.getElementsByTagName('li');
// for(var i=0;i<li.length;i++) {
//     li[i].style.backgroundColor = 'grey'
// }

// //make second item have green background color

// var secondItem = document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

//make third item invisible
var thirdItem = document.querySelector
('.list-group-item:nth-child(3)');
thirdItem.style.color = 'white';

//change the font color to green for 2nd item in the item list
var secondItemBg = document.querySelectorAll
('.list-group-item');
secondItemBg[1].style.color = 'green';

//make odd elements of list have green background color

var odd = document.querySelectorAll
('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++) {
    odd[i].style.backgroundColor = 'green'
}

