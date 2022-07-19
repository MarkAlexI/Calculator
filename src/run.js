let string = "";
let task = document.getElementById("task");
let answer = document.getElementById("answer");

function input(value) {
  if (string === "0") string = "";
  value
       ? string += value
       : string = "1/(" + string + ")";
  task.innerText = string;
  answer.innerText = "0";
  return;
}

function clearInput(index) {
  console.log(index);
  string = string.slice(0, index);
  task.innerText = string.length > 0 ? string : "0";
  if (string.length === 0) answer.innerText = "0";
  return;
}

function calc() {
  let task = string
                  .replaceAll('^', ' ** ')
                  .replaceAll('ln', 'Math.log')
                  .replaceAll('lg', 'Math.log10');
  let result;
  
  try {
    result = +eval(task);console.log(result > 1);
    result > 1 ? result.toFixed(6) : result.toPrecision(6);
  }
  
  catch {
    result = "Wrong task";
  }
  answer.innerText = result;
  console.log(result);
  return;
}
