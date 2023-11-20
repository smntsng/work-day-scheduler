
// varible to target current day in HTML
var timeDisplayEl = $("#currentDay");
// declare function to get the time and print to page
function displayTime() {
    var rightNow = dayjs().format("dddd, MMMM D, YYYY h:mm A");
    // displaying right now var to #currentDay
    timeDisplayEl.text(rightNow);

    
    console.log(rightNow)
  }
//   calling the function displayTime excute this code ever 1000ms
setInterval(displayTime,1000);

// saving user input to local storage
var userInput1El = document.getElementById("userInput1");
var saveBtn1El = document.getElementById("saveBtn1");
// geting item with key of userInput1 from local storage
userInput1El.value = localStorage.getItem("userInput1");
saveBtn1El.addEventListener("click", userText1);
function userText1() {
    // on clicking the save, userInput value is set to local storage
    localStorage.setItem("userInput1", userInput1El.value);
}

var userInput2El = document.getElementById("userInput2");
var saveBtn2El = document.getElementById("saveBtn2");
userInput2El.value = localStorage.getItem("userInput2");
saveBtn2El.addEventListener("click", userText2);
function userText2() {
    localStorage.setItem("userInput2", userInput2El.value);
}
var userInput3El = document.getElementById("userInput3");
var saveBtn3El = document.getElementById("saveBtn3");
userInput3El.value = localStorage.getItem("userInput3");
saveBtn3El.addEventListener("click", userText3);
function userText3() {
    localStorage.setItem("userInput3", userInput3El.value);
}
var userInput4El = document.getElementById("userInput4");
var saveBtn4El = document.getElementById("saveBtn4");
userInput4El.value = localStorage.getItem("userInput4");
saveBtn4El.addEventListener("click", userText4);
function userText4() {
    localStorage.setItem("userInput4", userInput4El.value);
}
var userInput5El = document.getElementById("userInput5");
var saveBtn5El = document.getElementById("saveBtn5");
userInput5El.value = localStorage.getItem("userInput5");
saveBtn5El.addEventListener("click", userText5);
function userText5() {
    localStorage.setItem("userInput5", userInput5El.value);
}
var userInput6El = document.getElementById("userInput6");
var saveBtn6El = document.getElementById("saveBtn6");
userInput6El.value = localStorage.getItem("userInput6");
saveBtn6El.addEventListener("click", userText6);
function userText6() {
    localStorage.setItem("userInput6", userInput6El.value);
}
var userInput7El = document.getElementById("userInput7");
var saveBtn7El = document.getElementById("saveBtn7");
userInput7El.value = localStorage.getItem("userInput7");
saveBtn7El.addEventListener("click", userText7);
function userText7() {
    localStorage.setItem("userInput7", userInput7El.value);
}
var userInput8El = document.getElementById("userInput8");
var saveBtn8El = document.getElementById("saveBtn8");
userInput8El.value = localStorage.getItem("userInput8");
saveBtn8El.addEventListener("click", userText8);
function userText8() {
    localStorage.setItem("userInput8", userInput8El.value);
}
var userInput9El = document.getElementById("userInput9");
var saveBtn9El = document.getElementById("saveBtn9");
userInput9El.value = localStorage.getItem("userInput9");
saveBtn9El.addEventListener("click", userText9);
function userText9() {
    localStorage.setItem("userInput9", userInput9El.value);
}



// colour coding time blocks
var currentHour = dayjs().format("h");
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