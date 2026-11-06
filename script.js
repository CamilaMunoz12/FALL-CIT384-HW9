/* ==========================
   Part 1: Date Display
   ========================== */

// 1. Create a Date object
var today = new Date();

// 2. Get the current month, day, and year
// 3. Add 1 because JavaScript months start at 0
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

// 4. Add leading zeros if needed
month = String(month).padStart(2, "0");
day = String(day).padStart(2, "0");

// 5. Format the date as MM/DD/YYYY
var formattedDate = "Today is " + month + "/" + day + "/" + year;

// 6. Display the date on the webpage
document.querySelector("#dateOutput").innerHTML = formattedDate;


/* ==========================
   Part 2: Number Conversion
   ========================== */

// 1. Create four separate variables
var value1 = "56";
var value2 = "18.25";
var value3 = "apple";
var value4 = "104";

// 2. Convert each value using Number()
var converted1 = Number(value1);
var converted2 = Number(value2);
var converted3 = Number(value3);
var converted4 = Number(value4);

// Check whether each converted value is NaN
var isNaN1 = Number.isNaN(converted1);
var isNaN2 = Number.isNaN(converted2);
var isNaN3 = Number.isNaN(converted3);
var isNaN4 = Number.isNaN(converted4);

// Check whether each converted value is an integer
var isInteger1 = Number.isInteger(converted1);
var isInteger2 = Number.isInteger(converted2);
var isInteger3 = Number.isInteger(converted3);
var isInteger4 = Number.isInteger(converted4);

// 3. Create a sentence for each result
var result1 = "Original: '" + value1 +
    "' -> Converted: " + converted1 +
    " -> isNaN: " + isNaN1 +
    " -> isInteger: " + isInteger1;

var result2 = "Original: '" + value2 +
    "' -> Converted: " + converted2 +
    " -> isNaN: " + isNaN2 +
    " -> isInteger: " + isInteger2;

var result3 = "Original: '" + value3 +
    "' -> Converted: " + converted3 +
    " -> isNaN: " + isNaN3 +
    " -> isInteger: " + isInteger3;

var result4 = "Original: '" + value4 +
    "' -> Converted: " + converted4 +
    " -> isNaN: " + isNaN4 +
    " -> isInteger: " + isInteger4;

// 4. Combine all results into ONE string
var allResults = result1 + "<br><br>" +
                 result2 + "<br><br>" +
                 result3 + "<br><br>" +
                 result4;

// 5. Display the results on the webpage
document.querySelector("#numberConversionOutput").innerHTML = allResults;


/* ==========================
   Part 3: Math & Formatting
   ========================== */

// 1. Create three numeric variables
var score1 = 88;
var score2 = 92;
var score3 = 79;

// 2. Perform addition
var totalScore = score1 + score2 + score3;

// Perform division
var averageScore = totalScore / 3;

// 3. Format the average to two decimal places
var formattedAverage = averageScore.toFixed(2);

// 4. Build a string showing the results
var mathResults = "Grade Scores: " +
    score1 + ", " + score2 + ", " + score3 +
    "<br><br>Total Score: " + totalScore +
    "<br><br>Average Score: " + formattedAverage;

// 5. Display results on the webpage
document.querySelector("#mathOutput").innerHTML = mathResults;
