$(function () {
    //Get All Classes With Working of all Open And CLose
    $(".openA").click(function () {
        $(".left").addClass("open");
        setTimeout(function () {
            $(".right").addClass("open");
        }, 250);
        setTimeout(function () {
            $(".back").addClass("open");
        }, 350);
        $(".closeA").delay(1000).fadeIn();
    });

    
    //Now CLose Working
    $(".closeA").click(function () {
        setTimeout(function () {
            $(".left").removeClass("open");
        }, 250);
        $(".right").removeClass("open");
        setTimeout(function () {
            $(".back").removeClass("open");
        }, 600);
        $(".closeA").fadeOut();
    });
});

