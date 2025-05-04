$(document).ready(function() {
    // Initialize Isotope
    var $grid = $('.grid-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    
    // Filter items on button click
    $('.filter-buttons').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        
        // Update active class on buttons
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');
    });
    
    // Lightbox settings
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Image %1 of %2',
        'positionFromTop': 100,
        'fadeDuration': 300
    });
    
    // Smooth scrolling for navigation
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            500,
            'linear'
        );
    });
    
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});