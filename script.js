/* Part 1: Date Display */

var today = new Date();

var month = String(today.getMonth() + 1).padStart(2, "0");
var day = String(today.getDate()).padStart(2, "0");
var year = today.getFullYear();

var formattedDate = month + "/" + day + "/" + year;

document.querySelector("#current-date").innerHTML =
    "Today is " + formattedDate;

/* Part 2: Number Conversion and Validation */

// Four separate original values
var value1 = "56";
var value2 = "18.25";
var value3 = "apple";
var value4 = "104";

// Convert each value into a number
var converted1 = Number(value1);
var converted2 = Number(value2);
var converted3 = Number(value3);
var converted4 = Number(value4);

// Display results on the webpage
document.querySelector("#test1").innerHTML =
    'Original value: "' + value1 +
    '" | Converted: ' + converted1 +
    ' | isNaN: ' + Number.isNaN(converted1) +
    ' | isInteger: ' + Number.isInteger(converted1);

document.querySelector("#test2").innerHTML =
    'Original value: "' + value2 +
    '" | Converted: ' + converted2 +
    ' | isNaN: ' + Number.isNaN(converted2) +
    ' | isInteger: ' + Number.isInteger(converted2);

document.querySelector("#test3").innerHTML =
    'Original value: "' + value3 +
    '" | Converted: ' + converted3 +
    ' | isNaN: ' + Number.isNaN(converted3) +
    ' | isInteger: ' + Number.isInteger(converted3);

document.querySelector("#test4").innerHTML =
    'Original value: "' + value4 +
    '" | Converted: ' + converted4 +
    ' | isNaN: ' + Number.isNaN(converted4) +
    ' | isInteger: ' + Number.isInteger(converted4);