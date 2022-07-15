console.log(
  "Project by Amoljot Singh\nDon't forget to check out my instagram @amoljot_singh\n\nBtw, If you are reading this, go back lol;"
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
    "| " +
    dateGet.getDate() +
    "th" +
    " " +
    month +
    " " +
    dateGet.getFullYear() +
    " |";

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

setInterval(updateTime, 1000);

updateDate();
