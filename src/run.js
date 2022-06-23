let string = "";
let task = document.getElementById("task");
let answer = document.getElementById("answer");

function input(value) {
  string += value;
  task.innerText = string;
}