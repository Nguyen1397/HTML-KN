// Create variables for the welcome message
var greeting = 'Howdy';
var name = 'Molly';
var message = greeting + name + message;

//Create variables to hold details about the sign
var sign = 'Montague House';
var titles = sign.length;
var subTotal = titles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of userSign then update its contents
var elTitles = document.getElementById('titles');
elTitles.textContent = titles;

// Get the element that has an id of userSign then update its contents
var elSubTotal = document.getElementById('subTotal');
elsubTotal.textContent = '$' + subTotal;

// Get the element that has an id of userSign then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of userSign then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;