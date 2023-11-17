// Display the current day at the top of the calender when a user opens the planner.

// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page
// Uses a date utility library to work with date and time

// 1. add current time to the header of website using jquery 
    // a. select existing dom element var rootEl = $('#pikachu');
    // create a var that holds the date and time code
    // create a new element to a assign new var
    // append rootEl.append(quoteEl);
// 2. create the time blocks using flex or gird that are only available during business hours
// 3. colour code timeblocks based on time
    // rootEl.children('ul').children().css('background-color', 'white');
    // ::hover?
// 3. make the timeblocks clickable 
    // add a lister for the click
    // funtion to create a 

// 4. allow users to enter input
// 1-10
// 5. save input to local storage

// 6. how to ensure events stay on page when refresh

console.log("hello")

// varible to target current day in HTML
var timeDisplayEl = $('#currentDay');
// declare function to get the time and print to page
function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM D YYYY');
    // displaying right now var to #currentDay
    timeDisplayEl.text(rightNow);

    
    console.log(rightNow)
  }
//   calling the function displayTime 
displayTime();

var descriptionEL = document.getElementById("description")