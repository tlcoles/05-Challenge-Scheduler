//? Key requirements
//! The assignment is for jQuery rather than JavaScript
//! Input (textarea) options for entering info
//! Color shift according to past/present/future time
//! Local storage (which was covered in Wk 4 ex 21 and 22)

//? Selectors
//* $("#idname").action()
//* $(".classname").action()
//* $("elementname").action()
//* $("div").css("background-color", "orange")
//* $("#idname, .classname").css("background-color", blue)

// starting at 8 am 
// create 8 table rows of three columns
// give each row an id number
// place the hour number in the table on the left
// place textarea in the middle row
// give each textarea an id number and a color class that is empty ""
// place a save icon in the right row
// give each save icon an id number
// every hour row that is before the current hour is in gray
// the current hour is in green

var row = [
  { rowID: "8AM", hour: "8AM",  btnID: "8AM" },
  { rowID: "9AM", hour: "9AM",  btnID: "9AM" },
  { rowID: "10AM", hour: "10AM",  btnID: "10AM" },
  { rowID: "11AM", hour: "11AM",  btnID: "11AM" },
  { rowID: "12PM", hour: "12PM",  btnID: "12PM" },
  { rowID: "1PM", hour: "1PM",  btnID: "1PM" },
  { rowID: "2PM", hour: "2PM",  btnID: "2PM" },
  { rowID: "3PM", hour: "3PM",  btnID: "3PM" },
  { rowID: "4PM", hour: "4PM",  btnID: "4PM" },
  { rowID: "5PM", hour: "5PM",  btnID: "5PM" },
  { rowID: "6PM", hour: "6PM",  btnID: "6PM" },
]

function createEmptyRows() {
  for (var i= 0; i < row[i].length; i++ ){
    var setID = row[i].rowID
    var tr = $('tr').attr('id', setID)
    var col1 = $('td')
    var col2 = $('td')
    var col3 = $('td')

  $("#timetable").append('<div id = "newElement">A '
      + 'Computer Science portal for geeks</div>');
    }
}

//* Use Luxon to insert current day and date in header section
var DateTime = luxon.DateTime;
const dt = DateTime.now()
$("#currentDay").html(dt.toLocaleString(DateTime.DATE_HUGE));


//! The following is Nirmeet code for fetching from a repo. Most relevant are the sections about creating tables and rows

// var tableBody = document.getElementById('repo-table');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   // fetch request gets a list of all the repos for the node.js organization
//   var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//       //Loop over the data to generate a table, each table row will have a link to the repo url
//       for (var i = 0; i < data.length; i++) {
//         // Creating elements, tablerow, tabledata, and anchor
//         var createTableRow = document.createElement('tr');
//         var tableData = document.createElement('td');
//         var link = document.createElement('a');

//         // Setting the text of link and the href of the link
//         link.textContent = data[i].html_url;
//         link.href = data[i].html_url;

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);