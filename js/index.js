console.log(
  "Amoljot Singh"
);

const dateGet = new Date();

function updateDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[dateGet.getMonth()];

  fullDate =
    dateGet.getDate() + " " + month + " " + dateGet.getFullYear();

  findingDate = document.getElementById("dateToday");

  findingDate.textContent = fullDate;
}

function updateTime() {
  const date = new Date();
  findingTime = document.getElementById("timeNow");
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  seconds = ("0" + seconds).slice(-2);
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var timeCalculated = hours + ":" + minutes + ":" + seconds + " " + ampm;
  findingTime.innerHTML = timeCalculated;
}

function navFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "navi") {
    x.className += " responsive";
  } else {
    x.className = "navi";
  }
}

// For responding navigation
function resp() {
  burger = document.querySelector(".burger");
  navbar = document.querySelector(".nav-box");
  nav = document.getElementById("navigation");
  dateLabel = document.getElementById("dateToday");
  TimeLabel = document.getElementById("timeNow");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("resp");
    nav.classList.toggle("h-resp");
    dateLabel.classList.toggle("resp");
    TimeLabel.classList.toggle("resp");
    burger.classList.toggle("resp");
  });
}

resp();

setInterval(updateTime, 1000);

updateDate();
