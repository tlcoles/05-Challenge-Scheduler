const DateTime = luxon.DateTime; // call luxon for time
const dt = DateTime.now(); // set current date

//* Use Luxon to keep current day and time in header section
setInterval(highlightCurrentHour, 10000); // call for the current hour every second

function highlightCurrentHour() {
  let currentHour = DateTime.local().hour; // set the current hour
  $("#current-day").html(dt.toLocaleString(DateTime.DATE_HUGE)); // show the current date
  $("body").addClass(`now-${currentHour}`); // add the current hour as a class to the body element to use css selectors for color change
   }
highlightCurrentHour(); // invoke immediately so there is no visual delay 

const submitTask = function(event) {
  event.preventDefault();
  let tasksArray = []
  const taskID = $("task-entry").attr("id")
  console.log(taskID);
  const task = $(".task-entry").val();
  console.log(task);
  localStorage.setItem
  JSON.parse(localStorage.getItem("IDs"))
}

function saveEntry() {
  // var appointment = $("textarea#appointment-entry").val();
  console.log(this.id)
  console.log(appointment)
  var div2 = $(".row div:nth-child(2)")
  div2.css("background-color", "red")
}


// TODO localStorage
// the preferred approach is
// localStorage.setItem(key,value); to set
// localStorage.getItem(key); to get.
// key and value must be strings.

//* Listen for click on save button
//* Get the id
//* For the sibling of that id, color the element red
