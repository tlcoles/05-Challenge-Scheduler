//* Use Luxon to insert current day and date in header section
setInterval(() => {
  var DateTime = luxon.DateTime;
  const dt = DateTime.now()
  $("#currentDay").html(dt.toLocaleString(DateTime.DATE_HUGE));
  $("#currentHour").html("Current time: " + DateTime.local().hour + ":" + DateTime.local().minute);
}, 1000);


//? Key requirements
//! Color shift according to past/present/future time
//! Local storage (which was covered in Wk 4 ex 21 and 22)

//? Selectors
//* $("#idname").action()
//* $(".classname").action()
//* $("elementname").action()
//* $("div").css("background-color", "orange")
//* $("#idname, .classname").css("background-color", "blue")

// TODO localStorage
// the preferred approach is
// localStorage.setItem(key,value); to set
// localStorage.getItem(key); to get.
// key and value must be strings.

//* Listen for click on save button
//* Get the id
//* For the sibling of that id, color the element red

// $("[role='button']").click(function(){
//   var id = $([role='button']).attr("id");
//   alert(id);
  // var btn = $("[id='this.id'], [role='button']");
  // btn.siblings(".appointment-entry").css("background-color", "red")
  // console.log(btn)
  // console.log(btn.siblings)
  // console.log(this.id)
  // console.log(appointment)
  // var div2 = $(".row div:nth-child(2)")
  // div2.css("background-color", "red")
// })

function saveEntry() {
  // var appointment = $("textarea#appointment-entry").val();
  console.log(this.id)
  console.log(appointment)
  var div2 = $(".row div:nth-child(2)")
  div2.css("background-color", "red")
}