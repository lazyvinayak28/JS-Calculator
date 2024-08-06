let btn = document.querySelectorAll(".childdiv");

let n = 0;
let result = "";
for (let i = 0; i <= btn.length; i++) {
  let el = btn[i].innerText;
  let screen = document.querySelector("#screen");

  function update() {
    screen.append(el);
  }

  function equals() {
    result = eval(screen.innerText);
    document.getElementById("screen").innerText = result;
  }
  function clear() {
    document.querySelector("# screen").innerText = "";
  }
  if (
    el == 1 ||
    el == 2 ||
    el == 3 ||
    el == 4 ||
    el == 5 ||
    el == 6 ||
    el == 7 ||
    el == 8 ||
    el == 9 ||
    el == 0 ||
    el == "*" ||
    el == "/" ||
    el == "+" ||
    el == "-"
  ) {
    btn[i].onclick = update;
  } else if (el == "=") {
    btn[i].onclick = equals;
  } else {
    btn[i].onclick = clear;
  }
}
