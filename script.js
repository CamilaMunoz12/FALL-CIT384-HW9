var today = new Date();

var month = String(today.getMonth() + 1).padStart(2, "0");
var day = String(today.getDate()).padStart(2, "0");
var year = today.getFullYear();

var formattedDate = month + "/" + day + "/" + year;

document.querySelector("#current-date").innerHTML =
    "Today is " + formattedDate;
