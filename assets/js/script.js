const DateTime = luxon.DateTime; // call luxon for time
const dt = DateTime.now(); // set current date

//* Use Luxon to keep current day and time in header section
setInterval(highlightCurrentHour, 10000); // call for the current hour every second

function highlightCurrentHour() {
  let currentHour = DateTime.local().hour; // set the current hour
  $("#current-day").html(dt.toLocaleString(DateTime.DATE_HUGE)); // show the current date
  $("body").addClass(`now-${currentHour}`); // add the current hour as a class to the body element to use css selectors for color
   }

//* Use .on as event listener for submit type
$("form").on("submit", function (e) {
  e.preventDefault();

// Loop through textareas to place content in localStorage
  $("textarea").each(function (indexInArray, element) { 
   localStorage.setItem(element.id, element.value)
});
});

// Use localStorage to show values on page
$("document").ready(function (e) {
  highlightCurrentHour(); // invoke immediately so there is no visual delay 
  $("textarea").each(function (indexInArray, element) {
    let value = localStorage.getItem(element.id);
    element.value = value
  });
})


// TODO Understand localStorage and jQuery .each and .ready
// localStorage.setItem(key,value); to set
// localStorage.getItem(key); to get