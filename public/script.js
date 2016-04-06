var balance =0;
$(function(){
	$("#getBalance").on("click", function(){
    	getTheBalance();
  	});
	function getTheBalance(){
	    $.get("/balance").done(function(response){
	      console.log(response);
	      balance = response;
	      beginProcessingBalance();
	      });
	    }
	function beginProcessingBalance(){
    $("body").append("<p> " + balance + "</p>");
  }
})