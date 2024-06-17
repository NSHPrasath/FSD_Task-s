let outputScreen = document.getElementById("output_screen");
let button = document.querySelectorAll("button");
// let string = "";
function display(num) {
  outputScreen.value += num;
}
function calculate() {
  if ((outputScreen.value = eval(outputScreen.value))) {
  } else {
    alert("Invalid");
  }
}
function allClear() {
  outputScreen.value = "";
}
function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
