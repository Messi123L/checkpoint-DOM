var mainEl = document.getElementById('main-paragraph');
console.log('el:', mainEl);

var elClassName = mainEl.getAttribute('class');
console.log('elClassName:', elClassName);

var withoutStyleEl = document.getElementById('without-style');
console.log('el:', withoutStyleEl);

var withoutStyleElClassName = withoutStyleEl.getAttribute('class');
console.log('withoutStyleElClassName:', withoutStyleElClassName);
/*
let btn = document.getElementById('myBtn');
// Setting new attributes
btn.setAttribute('class', 'click-btn');
btn.setAttribute('disabled', '');
*/
let btn = document.getElementById('myBtn');
// removing class  attribute
btn.removeAttribute('class');
//btn.removeAttribute('id');
console.log('btn:', btn);


//styling dom :

var elem = document.getElementById('intro');

// Appling styles on element
elem.style.color = 'blue';
elem.style.fontSize = '18px';
elem.style.fontWeight = 'bold';
console.log('elem:', elem);

//Adinnding elements:
  // Creating a new div element
  var newDiv = document.createElement('div');
  // Creating a text node
  var newContent = document.createTextNode('Hi, how are you doing?');
  // Adding the text node to the newly created div
  newDiv.appendChild(newContent);
  // Adding the newly created element and its content into the DOM
  var currentDiv = document.getElementById('main');
  document.body.appendChild(newDiv, currentDiv);

//Getting or Setting HTML Contents to DOM

  // Getting inner HTML conents
  var contents = document.getElementById('main').innerHTML;
  console.log('contents :', contents);

  // Setting inner HTML contents
  var mainDiv = document.getElementById('main');
  mainDiv.innerHTML = '<p>This is <em>newly inserted</em> paragraph.</p>';

  //Remove Elements :
  var parentElem = document.getElementById('main1');
  var childElem = document.getElementById('hint1');
  parentElem.removeChild(childElem);
  console.log("parentElem", parentElem)

 //add event
 var btnn = document.querySelector('button');
 btnn.onclick=foo;
 //event type
 document.addEventListener('keydown', logKey);
 function logKey(event) {
   log.textContent += " " + e.code;
 }

 //form validition
 function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value
   if (name.length==0)
    return alert(`name is required`)
   if (password.length<5)
    return alert(`password length should more than 5`)
   }


