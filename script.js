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
    var rightNow = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    // displaying right now var to #currentDay
    timeDisplayEl.text(rightNow);

    
    console.log(rightNow)
  }
//   calling the function displayTime excute this code ever 1000ms
setInterval(displayTime,1000);

var textareaEL = document.getElementById("textarea")
var saveBtnEL = document.getElementById("saveBtn")

// textareaEL.value = localStorage.getItem('userInput1');
// saveBtnEL.addEventListener('click', updateUserInput1);
// //sets the input of text area into local storage
// function updateUserInput1() {
//     localStorage.setItem('userInput1', textareaEL.value);
// };


// colour coding time blocks
var currentHour = dayjs().format('h');
console.log("the current hours is " + currentHour)

if (currentHour < 9){
    $(".9").addClass("future");
} else if(currentHour == 9){
    $(".9").addClass("present");
}else if(currentHour > 9){
    $(".9").addClass("past");
}

if (currentHour < 10){
    $(".10").addClass("future");
} else if(currentHour == 10){
    $(".10").addClass("present");
}else if(currentHour > 10){
    $(".10").addClass("past");
}

if (currentHour < 11){
    $(".11").addClass("future");
} else if(currentHour == 11){
    $(".11").addClass("present");
}else if(currentHour > 11){
    $(".11").addClass("past");
}

if (currentHour < 12){
    $(".12").addClass("future");
} else if(currentHour == 12){
    $(".12").addClass("present");
}else if(currentHour > 12){
    $(".12").addClass("past");
}

if (currentHour < 13){
    $(".13").addClass("future");
} else if(currentHour == 13){
    $(".13").addClass("present");
}else if(currentHour > 13){
    $(".13").addClass("past");
}

if (currentHour < 14){
    $(".14").addClass("future");
} else if(currentHour == 14){
    $(".14").addClass("present");
}else if(currentHour > 14){
    $(".14").addClass("past");
}

if (currentHour < 15){
    $(".15").addClass("future");
} else if(currentHour == 15){
    $(".15").addClass("present");
}else if(currentHour > 15){
    $(".15").addClass("past");
}

if (currentHour < 16){
    $(".16").addClass("future");
} else if(currentHour == 16){
    $(".16").addClass("present");
}else if(currentHour > 16){
    $(".16").addClass("past");
}

if (currentHour < 17){
    $(".17").addClass("future");
} else if(currentHour == 17){
    $(".17").addClass("present");
}else if(currentHour > 17){
    $(".17").addClass("past");
}