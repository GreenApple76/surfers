$(document).ready(function() {

    // event listners for the product specification tabs
    $('#description-link').on('click', function(e) {
        $('.tab').removeClass('active'); // hide all tab content
        $('#description').addClass('active'); // display the active tab content
        $('#description-link > span').addClass('selected'); // activate blue border under tab to indicate active tab
        $('#features-link > span').removeClass('selected');
        $('#dimensions-link > span').removeClass('selected');
    });

    $('#features-link').on('click', function(e) {
        $('.tab').removeClass('active');
        $('#features').addClass('active');
        $('#features-link > span').addClass('selected');
        $('#description-link > span').removeClass('selected');
        $('#dimensions-link > span').removeClass('selected');
    });

    $('#dimensions-link').on('click', function(e) {
        $('.tab').removeClass('active');
        $('#dimensions').addClass('active');
        $('#dimensions-link > span').addClass('selected');
        $('#features-link > span').removeClass('selected');
        $('#description-link > span').removeClass('selected');
    });
});