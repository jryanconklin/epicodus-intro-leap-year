// business logic
var leapYear = function(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }  
};

// user interface logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
