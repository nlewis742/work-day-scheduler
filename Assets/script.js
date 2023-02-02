// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
console.log(today);





var presentHour = dayjs().hour();
// $('#hour-').text(today.currentHour.format('HH, mm, 00'));

console.log(presentHour);


for (let i = 9; i < 18; i++) {
  var hour = $('#hour-' + i)
  console.log(hour);

  if (i < presentHour) {
    hour.addClass('past')
  }

  if (i == presentHour) {
    hour.addClass('present')
  }

  if (i > presentHour) {
    hour.addClass('future')
  }

  var textArea = localStorage.getItem('hour-' + i)
  console.log(textArea);
  hour.children('textarea').val(textArea)
}

// $(function () {
//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
//     //
//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //
//     // TODO: 
//   });
  


var saveButton = $('.btn');

console.log(this);

function save () {
  var textArea = $(this).siblings('textarea');
  var timeblockID = $(this).parent().attr('id');
  localStorage.setItem(timeblockID, textArea.val())

  console.log(this).siblings;
}

saveButton.on('click', save)