const result = document.getElementById("result");
let number = 0;
let health = 5;

function generateRandomNumber() {
  number = Math.ceil(Math.random() * 10);
}
generateRandomNumber();
console.log(number);

function showMessage(message) {
  result.innerHTML = message;
}

function guaseNumber() {
  const guased = document.getElementById("guess-number").value;

  if (guased == "") {
    showMessage("benvis");
    return;
  }
  if (guased == number) {
    document.getElementById("main-number").innerText = number;
    if (confirm("bordi edame midi?")) {
      reset();
    }
  } else if (guased < number) {
    decraseHealth();
    showMessage("biya bala");
  } else if (guased > number) {
    showMessage("biya payin");
    decraseHealth();
  }
}

function decraseHealth() {
  if (health <= 0) {
    if (confirm("bakhti edame midi?")) {
      reset();
    }
    return;
  }
  const healthEle = document.getElementById("heart" + health);
  healthEle.src = "./src/heart-off.png";
  health--;
}

function reset() {
  generateRandomNumber();
  health = 5;
  for (let index = 1; index <= 5; index++) {
    const healthEle = document.getElementById("heart" + index);
    healthEle.src = "./src/heart.png";
  }
  document.getElementById("guess-number").value = "";
  showMessage("");
}
