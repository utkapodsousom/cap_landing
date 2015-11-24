$(".toggle_menu").click(function() {
   $(this).toggleClass("on");
    $(".menubar").slideToggle();
});

$(".scroll_down").click(function(){
	$("html, body").animate({ scrollTop: $(".main_head").height()+30 }, "slow");
	return false;
});

$(".scroll_top").click(function(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

$(".forms").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		alert("Спасибо за заявку!");
		setTimeout(function() {
			$.magnificPopup.close();
			$(".forms").trigger("reset");
		}, 1000);
	});
	return false;
});

$('.hr_button a').magnificPopup({
  type:'inline',
  midClick: true
});

$('.phone_upper a').magnificPopup({
  type:'inline',
  midClick: true
});

$('.electromoney').magnificPopup({
  type:'inline',
  midClick: true
});

$(document).ready(function() {
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
