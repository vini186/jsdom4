var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);
//filter event
 filter.addEventListener('keyup', filterItems );

//addItem
function addItem(e){
    e.preventDefault();

// Get input value
var newItem = document.getElementById('item').value;
console.log(newItem);

// Create new li element
var li = document.createElement('li');

// Add class
li.className= 'list-group-item';

// Add text node with input value
li.appendChild(document.createTextNode(newItem));
 //Create del button element
 var deleteBtn = document.createElement('button');
 //add classes to delbutton
 deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 //append text node
 deleteBtn.appendChild(document.createTextNode('X'));
 //append button to li
 li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
 //filter items
 function filterItems(e){
   // convert text to lowercase
   var text = e.target.value.toLowerCase();
   itemList.getElementsByTagName('li');
   //get lis
   var items = itemList.getElementsByTagName('li');
   // convert to an arry
   Array.from(items).forEach(function(item){
       var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1) {
          item.style.display ='block';
      } else {
          item.style.display ='none';
      }
   });
 }

