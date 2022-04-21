//Get Values
var getSlide = $('.container li').length - 1;
var slidecal = 30 / getSlide + '%';

$('.box').css({ "width": slidecal });

$('.box').click(function () {
    $('.box').removeClass('active');
    $(this).addClass('active');
});

