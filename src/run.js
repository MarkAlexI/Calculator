let string = "";
let task = document.getElementById("task");
let answer = document.getElementById("answer");

function input(value) {
  string += value;
  task.innerText = string;
  return;
}

function clear() {
  task.innerText = "";
  return;
}

function calc() {
  answer.innerText = eval(string);
  return;
}