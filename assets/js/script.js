//* Use Luxon API to keep current day and time 
const DateTime = luxon.DateTime; // Call Luxon API for time
const dt = DateTime.now(); // Set current date

// Use "now-" and currentHour value as a class for the body element to use css selectors for color
function highlightCurrentHour() {
  let currentHour = DateTime.local().hour; // set the current hour
  $("#current-day").html(dt.toLocaleString(DateTime.DATE_HUGE)); // show the current date
  $("body").addClass(`now-${currentHour}`); 
   }

setInterval(highlightCurrentHour, 10000); // call for the current hour every second

//* Use .on as event listener for submit type
$("form").on("submit", function (e) {
  e.preventDefault();

//* Loop through textareas to place content in localStorage
  $("textarea").each(function (indexInArray, element) { 
   localStorage.setItem(element.id, element.value);
});
});

//* Use localStorage to show values on page
$("document").ready(function (e) {
  highlightCurrentHour(); // invoke immediately so there is no visual delay 
  $("textarea").each(function (indexInArray, element) {
    let value = localStorage.getItem(element.id);
    element.value = value;
  });
})