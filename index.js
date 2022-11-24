var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.71828182846;
}

// ---------------------------------------------------------------------------------------------
function pressButton(key) {
  switch (key) {
    case "1":
      screen.value = 1;
      break;

    case "2":
      screen.value = 2;
      break;

    case "3":
      screen.value = 3;
      break;

    case "4":
      screen.value = 4;
      break;

    case "5":
      screen.value = 5;
      break;

    case "6":
      screen.value = 6;
      break;

    case "7":
      screen.value = 7;
      break;

    case "8":
      screen.value = 8;
      break;

    case "9":
      screen.value = 9;
      break;

    case "0":
      screen.value = 0;
      break;

    default:
      console.log(key);
  }
}
// ---------------------------------------------------------------------------------------------
function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

// Work is remaning ----->

function enter() {
  screen.value = eval(screen.value);
}

for (let i = 0; i < btn.length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    this.style.backgroundcolor = "yellow";
  });
}

/// ---------------------------------------------------------------------------------------------------------------

// Get the input field
var input = document.getElementById("eval");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function () {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    screen.value = eval(screen.value);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    screen.value = eval(screen.value);
  }
});
