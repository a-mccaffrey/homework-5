// Get the document ready
$(document).ready(function () {
  // Show today's date in the jumbotron
  function showCurrentDay() {
    $("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));
  }

  // Invoke the function
  showCurrentDay();

  // Function will check what time it is and if it equals the block's hour
  function timeEquals() {
    // Get the hour from moment.js and make sure it's readable by the if loop below
    var realHour = parseInt(moment().hour());

    // Check the input for all the text-input areas and parse it so we can 
    // compare it to the moment.js data
    $(".text-input").each(function () {
      var scheduleHour = parseInt($(this).attr("id"));

      // Compare the hours and apply and remove classes accordingly.
      if (scheduleHour < realHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (scheduleHour == realHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  timeEquals();

  // Tell the app to hear the save button and then take information from the button's 
  // sibling and associate it with the button's parent ID
  $(".saveBtn").on("click", function () {
    var input = $(this).siblings(".text-input").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, input);
  });

// Make all the text-inputs regurgitate the information we've entered - 
// this is based on the ID of the first div for each block, with the saved information 
// being saved to the second div's ID
  $("#hour9 .text-input").val(localStorage.getItem("nine"));
  $("#hour10 .text-input").val(localStorage.getItem("ten"));
  $("#hour11 .text-input").val(localStorage.getItem("eleven"));
  $("#hour12 .text-input").val(localStorage.getItem("twelve"));
  $("#hour13 .text-input").val(localStorage.getItem("thirteen"));
  $("#hour14 .text-input").val(localStorage.getItem("fourteen"));
  $("#hour15 .text-input").val(localStorage.getItem("fifteen"));
  $("#hour16 .text-input").val(localStorage.getItem("sixteen"));
  $("#hour17 .text-input").val(localStorage.getItem("seventeen"));
});
