// business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
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


    $(".year").text(year);

    if (isNaN(year) || year < 0) {
      $("#error").show();
    } else {
      var result = leapYear(year);
         if (!result) {
        $(".not").text("not");
      } else {
        $(".not").text("");
      }
      $("#result").show();
    }
  });
});
