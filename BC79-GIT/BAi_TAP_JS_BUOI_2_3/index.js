// start link iframe

document.getElementById("b1").onclick = function () {
  document.querySelector("iframe").src = "b1.html";
};

document.getElementById("b2").onclick = function () {
  document.querySelector("iframe").src = "b2.html";
};

document.getElementById("b3").onclick = function () {
  document.querySelector("iframe").src = "b3.html";
};

document.getElementById("b4").onclick = function () {
  document.querySelector("iframe").src = "b4.html";
};

document.getElementById("b5").onclick = function () {
  document.querySelector("iframe").src = "b5.html";
};

// end link iframe

// start b1

document.getElementById("btn_b1").onclick = function () {

let inputElement = document.getElementById("ip_b1");
let inputValue = inputElement.value;

console.log(inputValue);
  
  // let p = document.getElementById("ip_b1").get;
  // console.log(p);
  // document.getElementById("lb_b1").innerHTML = document.getElementById("ip_b1").value * 100.000;
};

// end b1
