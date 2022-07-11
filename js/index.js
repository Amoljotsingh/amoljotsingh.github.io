console.log('If you are reading this, go back lol');

const dateGet = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[dateGet.getMonth()];

fullDate = '| ' + dateGet.getDate() + 'th' + ' ' + month + ' ' + dateGet.getFullYear() + ' |';
// fullTime = '| ' + dateGet.getHours() + ':' + dateGet.getMinutes() + ':' + dateGet.getSeconds() + ' |';

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

fullTime = formatAMPM(new Date);

document.getElementById("dateToday").textContent = fullDate
document.getElementById("timeNow").textContent = fullTime

// energistically deploy principle-centered ideas
// strategically fabricate cross-platform ROI
// energistically drive clicks-and-mortar relationships
// fungibly syndicate quality nosql

// not so important text (or demo text under title; color: #7f7f7f)
