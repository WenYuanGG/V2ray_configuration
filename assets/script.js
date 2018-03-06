window.onload = function(){
	$(".log11").on("click", function(){
		hide_all();
		$(".log1").toggle();
	});

	$(".log22").on("click", function(){
		hide_all();
		$(".log2").toggle();
	});
}

function hide_all(){
	$(".log1").hide();
	$(".log2").hide();
}