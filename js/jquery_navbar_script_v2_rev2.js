$(document).ready(function() {
	$(".nav-icon").click(function() {
		$(".nav ul").toggleClass("showing");
		$(".nav-icon").toggleClass("nav-close");
	});
});