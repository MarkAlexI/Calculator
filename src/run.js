let string = "";
let task = document.getElementById("task");
let answer = document.getElementById("answer");

function input(value) {
  console.log(value);
  if (string === "0") string = "";
  value
       ? string += value
       : string = "1/(" + string + ")";
  task.innerText = string;
  return;
}

function clearInput(index) {
  console.log(index);
  string = string.slice(0, index);
  task.innerText = string.length ? string : "0";
  return;
}

function calc() {
  let task = string
                  .replaceAll('^', ' ** ')
                  .replaceAll('ln', 'Math.log')
                  .replaceAll('lg', 'Math.log10');
  answer.innerText = eval(task);
  console.log(task);
  return;
}