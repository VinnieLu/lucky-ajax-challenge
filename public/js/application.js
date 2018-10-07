$(document).ready(function () {

  $("form").on("click", function (event) {
  	event.preventDefault()
  	var form = $(this);
  	console.log(form.serialize())
  	$.ajax({
  		url: form.attr("action"),
  		type: form.attr("method"),
  		data: form.serialize()
  	})
  	.done( function(response) {
  		$("#die-container").replaceWith(response);
  	});
  });


  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery

});
