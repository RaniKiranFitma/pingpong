
	//User Interface Logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    $("ul").empty();
    var number = parseInt($("input#numberEntry").val());
	
	//Business Logic
	
if (number<=0){
	alert("please enter a number");
}
    for (i = 1; i <= number; i++)
      if (i % 3 === 0 && i % 5 === 0) {
        $("ul").append("<li>pingpong</li>");

      } else if (i % 3 === 0) {
      $("ul").append("<li>ping</li>");

    } else if (i % 5 === 0) {
      $("ul").append("<li>pong</li>");

    } else {
      $("ul").append("<li>" + i + "</li>");
    }
    event.preventDefault();
  });
});
