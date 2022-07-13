console.log(
  "Project by Amoljot Singh\nDon't forget to check out my instagram @amoljot_singh\n\nBtw, If you are reading this, go back lol;"
);

function updateDateTime() {
  const dateGet = new Date();

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

  fullTime = formatAMPM(new Date());

  findingDate = document.getElementById("dateToday");
  findingTime = document.getElementById("timeNow");

  findingDate.textContent = fullDate;
  findingTime.textContent = fullTime;
}

updateDateTime();

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
