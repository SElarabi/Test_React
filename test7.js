/** @format */

require('dotenv').config();
const varTest = process.env.SECRET_KEY;

const button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', function () {
	console.log(varTest);
});
