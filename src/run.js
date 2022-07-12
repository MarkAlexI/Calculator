let string = "";
let task = document.getElementById("task");
let answer = document.getElementById("answer");

function input(value) {
  value
       ? string += value
       : string = "1/(" + string + ")";
  task.innerText = string;
  return;
}

function clear(index) {
  console.log(index);
  string = string.slice(0, index);
  task.innerText = string;
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