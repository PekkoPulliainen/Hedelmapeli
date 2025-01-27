let bet = 1;
let lock1Enable = false;
let lock2Enable = false;
let lock3Enable = false;
let lock4Enable = false;
let balance = 50;

let prizeText = document.getElementById("prize-Text");

let moneyDisplay = document.getElementById("money-Display");
let betDisplay = document.getElementById("bet-Display");
let rollDisplay1 = document.getElementById("rollIcon1");
let rollDisplay2 = document.getElementById("rollIcon2");
let rollDisplay3 = document.getElementById("rollIcon3");
let rollDisplay4 = document.getElementById("rollIcon4");
let lockDisplay1 = document.getElementById("lock-1");
let lockDisplay2 = document.getElementById("lock-2");
let lockDisplay3 = document.getElementById("lock-3");
let lockDisplay4 = document.getElementById("lock-4");

let roll;

let lockBlock = true;

const items = {
  apple: {
    number: 0,
    image: "img/apple.png",
    multiplier: 6,
  },
  pear: {
    number: 1,
    image: "img/pear.png",
    multiplier: 4,
  },
  cherry: {
    number: 2,
    image: "img/cherry.png",
    multiplier: 3,
  },
  melon: {
    number: 3,
    image: "img/watermelon.png",
    multiplier: 5,
  },
  seven: {
    number: 4,
    image: "img/seven.png",
    multiplier: 10,
  },
};

function betAmount1() {
  bet = 1;
  console.log("New bet is " + bet);
  betDisplay.textContent = "Panos: 1€";
}

function betAmount2() {
  bet = 2;
  console.log("New bet is " + bet);
  betDisplay.textContent = "Panos: 2€";
}

function betAmount3() {
  bet = 3;
  console.log("New bet is " + bet);
  betDisplay.textContent = "Panos: 3€";
}

function lock1() {
  if (lockBlock === true) {
    lock1Enable = false;
    lockDisplay1.src = "img/unlock.jpg";
    return;
  }
  if (lock1Enable === false) {
    lock1Enable = true;
    lockDisplay1.src = "img/lock.jpg";
  } else {
    if (lock1Enable === true) {
      lock1Enable = false;
      lockDisplay1.src = "img/unlock.jpg";
    }
  }
}

function lock2() {
  if (lockBlock === true) {
    lock2Enable = false;
    lockDisplay2.src = "img/unlock.jpg";
    return;
  }
  if (lock2Enable === false) {
    lock2Enable = true;
    lockDisplay2.src = "img/lock.jpg";
  } else {
    if (lock2Enable === true) {
      lock2Enable = false;
      lockDisplay2.src = "img/unlock.jpg";
    }
  }
}

function lock3() {
  if (lockBlock === true) {
    lock3Enable = false;
    lockDisplay3.src = "img/unlock.jpg";
    return;
  }
  if (lock3Enable === false) {
    lock3Enable = true;
    lockDisplay3.src = "img/lock.jpg";
  } else {
    if (lock3Enable === true) {
      lock3Enable = false;
      lockDisplay3.src = "img/unlock.jpg";
    }
  }
}

function lock4() {
  if (lockBlock === true) {
    lock4Enable = false;
    lockDisplay4.src = "img/unlock.jpg";
    return;
  }
  if (lock4Enable === false) {
    lock4Enable = true;
    lockDisplay4.src = "img/lock.jpg";
  } else {
    if (lock4Enable === true) {
      lock4Enable = false;
      lockDisplay4.src = "img/unlock.jpg";
    }
  }
}

function play() {
  prizeText.textContent = "";
  if (balance < bet) {
    prizeText.textContent = "Ei tarpeeksi rahaa!";
    return;
  }
  if (lockBlock === true) {
    lockBlock = false;
  }
  balance -= bet;
  moneyDisplay.textContent = "Rahaa: " + balance + "€";
  if (lock1Enable === false) {
    roll = Math.floor(Math.random() * 5);
    item1 = Object.values(items).find((item) => item.number == roll);
    rollDisplay1.src = item1.image;
  }
  if (lock2Enable === false) {
    roll = Math.floor(Math.random() * 5);
    item2 = Object.values(items).find((item) => item.number == roll);
    rollDisplay2.src = item2.image;
  }
  if (lock3Enable === false) {
    roll = Math.floor(Math.random() * 5);
    item3 = Object.values(items).find((item) => item.number == roll);
    rollDisplay3.src = item3.image;
  }
  if (lock4Enable === false) {
    roll = Math.floor(Math.random() * 5);
    item4 = Object.values(items).find((item) => item.number == roll);
    rollDisplay4.src = item4.image;
  }

  if (
    item1.number == item2.number &&
    item2.number == item3.number &&
    item3.number == item4.number
  ) {
    balance += bet * item1.multiplier;
    prizeText.textContent = "Voitit " + bet * item1.multiplier + " euroa!";
    moneyDisplay.textContent = "Rahaa: " + balance + "€";
    lockBlock = true;
    lock1();
    lock2();
    lock3();
    lock4();
  } else if (
    (item1.number == item2.number &&
      item2.number == item3.number &&
      item1.number == 4) ||
    (item2.number == item3.number &&
      item3.number == item4.number &&
      item2.number == 4) ||
    (item1.number == item3.number &&
      item3.number == item4.number &&
      item1.number == 4) ||
    (item1.number == item2.number &&
      item2.number == item4.number &&
      item1.number == 4)
  ) {
    balance += bet * 5;
    moneyDisplay.textContent = "Rahaa: " + balance + "€";
    prizeText.textContent = "Voitit " + bet * 5 + " euroa!";
    lockBlock = true;
    lock1();
    lock2();
    lock3();
    lock4();
  }
  if (
    lock1Enable === true ||
    lock2Enable === true ||
    lock3Enable === true ||
    lock4Enable === true
  ) {
    lock1Enable = false;
    lockDisplay1.src = "img/unlock.jpg";
    lock2Enable = false;
    lockDisplay2.src = "img/unlock.jpg";
    lock3Enable = false;
    lockDisplay3.src = "img/unlock.jpg";
    lock4Enable = false;
    lockDisplay4.src = "img/unlock.jpg";
    lockBlock = true;
  }
}
