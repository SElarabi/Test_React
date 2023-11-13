/** @format */

require('dotenv').config();
const varTest = process.env.SECRET_KEY;
console.log('SECRET VARIABLE FROM .ENV ', varTest);
const button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', function () {
	console.log('SECRET VARIABLE FROM .ENV ', varTest);
});
