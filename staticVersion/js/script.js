$(document).ready(function() {
    $('.menuToggle').on('click', function() {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });
});