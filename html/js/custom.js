$(document).ready(function() {


	/*
	Dropdown
	=========================== */
	$('ul li.dropdown').hover(function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		}, function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
	});

	/*
	Mobile navigation
	=========================== */
    //build dropdown
    $("<select />").appendTo(".navbar .nav-collapse .nav");

    //Default option "Voir les rubriques�"
    $("<option />", {
       "selected": "selected",
       "value"   : "",
       "text"    : "Select menu"
    }).appendTo(".navbar .nav-collapse .nav select");

    //Menu items
    $(".navbar .nav-collapse .nav li a").each(function() {
        var el = $(this);
        $("<option />", {
            "value"   : el.attr("href"),
            "text"    : el.text()
        }).appendTo(".navbar .nav-collapse .nav select");
    });

    //Link
    $(".navbar .nav-collapse .nav select").change(function() {
        window.location = $(this).find("option:selected").val();
    });

});