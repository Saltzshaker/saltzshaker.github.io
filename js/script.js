//$('a[href*="#"]:not([href="#"])').click(function() {
//  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//    var target = $(this.hash);
//    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//    if (target.length) {
//      $('html, body').animate({
//        scrollTop: target.offset().top
//      }, 1000);
//      return false;
//    }
//  }
//});


$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});

// Add smooth scrolling to all links


//$("a").on('click', function (event) {
//
//    // Make sure this.hash has a value before overriding default behavior
//    if (this.hash !== "") {
//        // Prevent default anchor click behavior
//        event.preventDefault();
//
//        // Store hash
//        var hash = this.hash;
//
//        // Using jQuery's animate() method to add smooth page scroll
//        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//        $('html, body').animate({
//            scrollTop: $(hash).offset().top
//        }, 1000, function () {
//
//            // Add hash (#) to URL when done scrolling (default click behavior)
//            window.location.hash = hash;
//        });
//    } // End if
//});

// Add smooth scrolling to all links
$(".project-link").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    $("a.active").removeClass("active");
    $(this).addClass('active');
    $('.navbar-collapse').removeClass('in');
    
    
});

$(".navbar-toggle").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    this.addClass('active-mobile');
    
});





