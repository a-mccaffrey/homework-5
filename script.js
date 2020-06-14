// Show today's date

var today = document.getElementById("currentDay");

function makeItToday(){
    today.innerText = moment().format('dddd, MMMM Do YYYY');
};

makeItToday();

// show when it's past the hour

var times = [
    "nine",
    "ten",
    "eleven",
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
]
