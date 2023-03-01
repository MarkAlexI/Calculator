"use strict";

let string = "";
let task = document.getElementById("task");
let answer = document.getElementById("answer");
let ang = document.getElementById("ang");
let degs = [['rad', 1], ['deg', Math.PI/180], ['grd', 1/63.662]];
let index = 0, coeff = 1;

function changeAng() {
  index++;
  if (index === 3) index = 0;
  ang.innerText = degs[index][0];
}

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
  string = string.slice(0, index);
  task.innerText = string.length > 0 ? string : "0";
  if (string.length === 0) answer.innerText = "0";
  return;
}

function calc() {
  coeff = degs[index][1];
  let task = string
                  .replaceAll('^', ' ** ')
                  .replaceAll('ln', 'Math.log')
                  .replaceAll('lg', 'Math.log10')
                  .replaceAll('π', 'Math.PI')
                  .replaceAll('sin', coeff + '* Math.sin')
                  .replaceAll('cos', coeff + '* Math.cos')
                  .replaceAll('tg', coeff + '* Math.tan');
  let result;
  
  try {
    result = +eval(task);
    result = result > 1 ? result.toFixed(6) : result.toPrecision(6);
  }
  
  catch {
    result = "Wrong task";
  }
  answer.innerText = result;
  return;
}
