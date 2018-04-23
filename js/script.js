
	//User Interface Logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    $(".ll").remove();
	$("#output").add(".ll");
    var myNumber = parseInt($("input#numberEntry").val());
	
	//Business Logic
	
if (myNumber<=0){
	alert("please enter a number");
}
    for (i = 1; i <= myNumber; i++)
      if (i %15 === 0)
		  {
        $("ul").append('<li class="ll"><img src="1.png" width="40"></li>');
		 }
	  else if (i % 3 === 0) {
      $("ul").append('<li class="ll"><img src="2.png" width="40"></li>');

    } else if (i % 5 === 0) {
      $("ul").append('<li class="ll"><img src="3.png" width="25"></li>');

    } else {
      $("ul").append('<li class="ll">' + i + '</li>');
    }
    event.preventDefault();
  });
});
