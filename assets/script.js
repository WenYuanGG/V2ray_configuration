window.onload = function(){
	$(".log").on("click", function(){
		hide_all_content();
		console.log("log trigger");
		$(".log-content").toggle();
	});

	$(".routing").on("click", function(){
		hide_all_content();
		console.log("routing trigger");
		$(".routing-content").toggle();
	});
}

function hide_all_content(){
	$(".log-content").hide();
	$(".routing-content").hide();
}