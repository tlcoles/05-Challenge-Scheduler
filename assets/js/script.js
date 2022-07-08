//? Key requirements
//! jQuery and time application web API required 
// Current date in the header
// Input (textarea) options for entering info
// Color shift according to past/present/future time
//! Local storage was covered in Wk 4 ex 21 and 22



//! Use Luxon to insert current day and date in header section
// const dt = DateTime.now()

//! This is javascript; the assignment is for jQuery
document.getElementById("currentDay").innerHTML = "testing placement"

//! The following is Nirmeet code for fetching from a repo. Most relevant are the sections about creating tables and rows

var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getApi);