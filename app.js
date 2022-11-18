const addButton = document.querySelectorAll('.add-btn');
const image1 = document.querySelector('.image');
const price = document.querySelector('.price');
const content = document.querySelector('.modal-content');


var myArray = [];

const items = {
 
  price: 199.99,
  title: 'television',
  img: 'blue-jeans-isolated-white-background-blue-jeans-isolated-white-126824335.jpg'
  


}


for(let i = 0; i < addButton.length; i++){
  addButton[i].addEventListener('click', (e) => {

   console.log(e.target);

   console.log(e.target.dataset.id);
    
   let value = content.innerHTML = `
   <div class = "container">
    <div class = "card">
    <img class = "image" src = ${items.img} />
    <h2 data ="value">${items.title}</h2>
    <p class = "price">${items.price}</p>
   
   `
   myArray.push(value);
  
  })  
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 