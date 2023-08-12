//class-2
//option:1 directly useing onclick() in html
/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */

//option:2 creat a function and call the function in html
//    <button onclick="makeRad()">Make Red</button>
//important we using
function makeRad(params) {
  document.body.style.backgroundColor = "red";
}

//option:3 using id...aand get the button id and using function
const makeGreen = document.getElementById("green");
makeGreen.onclick = function green(params) {
  document.body.style.backgroundColor = "green";
};

//class-3
//option:4 addEventListener on a button
//way:1
const blueButton = document.getElementById("make-blue");
blueButton.addEventListener("click", makeBlue);

function makeBlue(params) {
  document.body.style.backgroundColor = "blue";
}

// way:2

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", function makePink(params) {
    document.body.style.backgroundColor = "pink";
});

//way:3 important we using
document.getElementById("make-orange").addEventListener('click',function () {
    document.body.style.backgroundColor = "orange";
})
