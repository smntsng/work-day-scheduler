
// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page


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

var userInput1El = document.getElementById('userInput1');
var saveBtnEl = document.querySelector('button');
userInput1El.value = localStorage.getItem('userInput1');
saveBtnEl.addEventListener('click', userText1);
function userText1() {
    localStorage.setItem('userInput1', userInput1El.value);
}


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

if (currentHour < 1){
    $(".13").addClass("future");
} else if(currentHour == 1){
    $(".13").addClass("present");
}else if(currentHour > 1){
    $(".13").addClass("past");
}

if (currentHour < 2){
    $(".14").addClass("future");
} else if(currentHour == 2){
    $(".14").addClass("present");
}else if(currentHour > 2){
    $(".14").addClass("past");
}

if (currentHour < 3){
    $(".15").addClass("future");
} else if(currentHour == 3){
    $(".15").addClass("present");
}else if(currentHour > 3){
    $(".15").addClass("past");
}

if (currentHour < 4){
    $(".16").addClass("future");
} else if(currentHour == 4){
    $(".16").addClass("present");
}else if(currentHour > 4){
    $(".16").addClass("past");
}

if (currentHour < 5){
    $(".17").addClass("future");
} else if(currentHour == 5){
    $(".17").addClass("present");
}else if(currentHour > 5){
    $(".17").addClass("past");
}