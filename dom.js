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

// //make third item invisible
// var thirdItem = document.querySelector
// ('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'white';

// //change the font color to green for 2nd item in the item list
// var secondItemBg = document.querySelectorAll
// ('.list-group-item');
// secondItemBg[1].style.color = 'green';

// //make odd elements of list have green background color

// var odd = document.querySelectorAll
// ('.list-group-item:nth-child(odd)');
// for(var i=0;i<odd.length;i++) {
//     odd[i].style.backgroundColor = 'green'
// }

//parent element
// var itemList = document.querySelector('#items');
// itemList.parentElement.style.backgroundColor = 'grey';

// //last element child
// itemList.lastElementChild.style.backgroundColor = 'yellow';

// //last child
// itemList.lastChild.textContent = 'I am the last child of itemlist';

// //first child
// itemList.firstChild.textContent = 'I am the first child of itemlist';

// //first element child
// itemList.firstElementChild.style.backgroundColor = 'red';

// //next sibling
// itemList.nextSibling.textContent = 'I am next sibling of itemlist';

// //next element sibling
// itemList.nextElementSibling.style.color = 'green';

// //previous sibling
// itemList.previousSibling.textContent = 'I am previous sibling of itemlist';

// //previous element sibling

// itemList.previousElementSibling.textContent = 'previous element sibling of itemlist';

//create element
// var newDiv = document.createElement('div');
// //add class name and id
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// //add attribute --> title as helloDiv
// newDiv.setAttribute('title', 'hello Div');
// //create text node
// var newDivText = document.createTextNode('hello World');
// //append child --> add text to div
// newDiv.appendChild(newDivText);
// //select header container
// var container = document.querySelector('header .container');
// //select h1 of header
// var h1 = document.querySelector('header-title');

// //insert newDiv before h1
// container.insertBefore(newDiv,h1);

// //insert hello world before item 1
// //make new div element
// var listDiv = document.createElement('div');
// listDiv.className = 'hello';
// //create text node
// var listDivText = document.createTextNode('hello world');
// //append text node to listDiv
// listDiv.appendChild(listDivText);
// //make listcontainer
// var listContainer = document.querySelector('.list-group-item');
// //select list items with class
// var listItems = document.querySelector('.list-group-item');
// var listItem = listItems.firstChild;
// //insert listDiv before first child of listitems
// listContainer.insertBefore(listDiv,listItem)


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var search = document.getElementById('filter');
var desc = document.getElementById('description');
//form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click', removeItem);
// search event
search.addEventListener('keyup', searchItems);
//description
//add item function
function addItem(e) {
    e.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value;
    var itemDesc = document.getElementById('description').value;
    //create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    //console.log(li);

    //append text node to li
    li.appendChild(document.createTextNode(newItem));
    //append item description to li
    li.appendChild(document.createTextNode(itemDesc))

    //create delete button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);

    //create edit button element
    var editBtn = document.createElement('button');
    //make edit button float right
    editBtn.className = 'float-right';
    //append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    //append edit button to li
    li.appendChild(editBtn);

    //append li to child
    itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//search items event
function searchItems(e) {
    //store input text 
    var text = e.target.value.toLowerCase();
    
    //get all <li> elements
    var items = document.getElementsByTagName('li');
    
    console.log(items)
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        //description is always the second childnode of item
        var descr = item.childNodes[1].textContent;
        //display items when either item or description is a match
        if(itemName.toLowerCase().indexOf(text) != -1 || descr.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}