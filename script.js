
console.log("from script file");

const kiss = document.getElementById('Button');
const number = document.getElementById('field'); // Fixed syntax
let i = 0; // Use let for a mutable variable

kiss.onclick = function() {
    i++; // Increment the counter
    console.log(i); // Log current count in the console
    number.textContent = i; // Update the displayed count
};