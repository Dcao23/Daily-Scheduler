// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');
var past = $('.past');
var present = $('.present');
var future = $('.future');
var hours = $('.hours');

var accessDiv = document.getElementById('div');
var tableDiv = document.querySelectorAll('div');
var saveBtn = document.querySelectorAll('button');
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(document).ready(function () {
    $('.saveBtn').on('click', function() {
      var task = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id')
      console.log(task);
      console.log(time);
      localStorage.setItem(time, task);
    })
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var setTime = function () {
    for (let i = 0; i < tableDiv.length; i++) {
        if (dayjs().hour() == tableDiv[i].id) {
            tableDiv[i].classList.add('present');
        } else if (dayjs().hour() < tableDiv[i].id) {
            tableDiv[i].classList.add('future');
        } else {
            tableDiv[i].classList.add('past');
        }
    }
}
setTime();
// Add Code to display the current date and time in the header of the page.
var displayTime = function () {
  var currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
  timeDisplayEl.text(currentTime);
}
setInterval(displayTime, 1000);
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
var renderLastRegistered = function () {
$('#5 #timeBlock').val(localStorage.getItem('5'))
$('#6 #timeBlock').val(localStorage.getItem('6'))
$('#7 #timeBlock').val(localStorage.getItem('7'))
$('#8 #timeBlock').val(localStorage.getItem('8'))
$('#9 #timeBlock').val(localStorage.getItem('9'))
$('#10 #timeBlock').val(localStorage.getItem('10'))
$('#11 #timeBlock').val(localStorage.getItem('11'))
$('#12 #timeBlock').val(localStorage.getItem('12'))
$('#1 #timeBlock').val(localStorage.getItem('1'))
$('#2 #timeBlock').val(localStorage.getItem('2'))
$('#3 #timeBlock').val(localStorage.getItem('3'))
$('#4 #timeBlock').val(localStorage.getItem('4'))
$('#5 #timeBlock').val(localStorage.getItem('5'))
$('#6 #timeBlock').val(localStorage.getItem('6'))
$('#7 #timeBlock').val(localStorage.getItem('7'))
}
renderLastRegistered();