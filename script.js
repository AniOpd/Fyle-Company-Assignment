$(document).ready(function() {
    


    // contact us section 
    $('#open-popup').click(function(){
        console.log('clicked');
        $('.form-Container').addClass('active');
        $('.contactus').hide();
    });
    // getform.io implementation
    $("#form_to_submit").submit(function(e){
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
        type: "POST",
        url: action,
        crossDomain: true,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        headers: {
        "Accept": "application/json"
        }
    }).then(function() {
        alert('The form was submitted successfully.')
        $('.form-Container').removeClass('active');
        $('.contactus').show();
    }).catch(function() {
        console.log('An error occurred! Please try again later.');
        $('.form-Container').removeClass('active');
        $('.contactus').show();
    });
    });
    
    
    // slider section
    const $slides = $('.slide');
    const $dotsContainer = $('.dots');
    let slideIndex = 0;

    // Create dots dynamically
    $slides.each(function(index) {
        const $dot = $('<span class="dot"></span>');
        $dot.on('click', function() {
            showSlide(index);
        });
        $dotsContainer.append($dot);
    });

    const $dots = $('.dot');

    function showSlides() {
        $slides.hide();
        $dots.removeClass('active');
        slideIndex++;
        if (slideIndex > $slides.length) { slideIndex = 1; }
        $slides.eq(slideIndex - 1).show();
        $dots.eq(slideIndex - 1).addClass('active');
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    function showSlide(index) {
        $slides.hide();
        $dots.removeClass('active');
        $slides.eq(index).show();
        $dots.eq(index).addClass('active');
        slideIndex = index;
    }

    showSlides();

    // our products section

    $('.content-item').click(function() {
        var newImage = $(this).data('image');
        $('#mainImage').attr('src', newImage);
        
        $('.content-item').removeClass('active');
        $(this).addClass('active');
    });



});
