$(document).ready(function () {

    screenCheck();
    updateDots();

    $('.scroll-control #dot-one').click(function() {
        $.scrollify.move('#intro');
        updateDots();
    });
    $('.scroll-control #dot-two').click(function() {
        $.scrollify.move('#about');
        updateDots();
    });
    $('.scroll-control #dot-three').click(function() {
        $.scrollify.move('#projects');
        updateDots();
    });

    $('header nav ul .one').click(function() {
        $.scrollify.move('#about');
        updateDots();
    });
    $('header nav ul .two').click(function() {
        $.scrollify.move('#projects');
        updateDots();
    });
    $('header nav .header-logo-placement').click(function() {
        $.scrollify.move('#intro');
        updateDots();
    });
});

$(window).on('resize', function () {
    screenCheck();
});

function applyScroll() {
    $.scrollify({
        section : ".scroll",
        sectionName : "section-name",
        interstitialSection : ".normal-scrolling",
        easing: "easeOutExpo",
        scrollSpeed: 1000,
        offset : 0,
        scrollbars: true,
        standardScrollElements: ".normal-scrolling",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
}
function screenCheck() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID || $(window).width() <= 1023) {
        // mobile screen
        $.scrollify.destroy();
        $('section').removeClass('scroll').removeAttr('style');
        $('.scroll-dots div').removeClass('scroll-control');
    } else {
        // desktop
        $('section').addClass('scroll');
        $('.scroll-dots div').addClass('scroll-control');
        applyScroll();
        $.scrollify.enable();
    }
}   

function updateDots() {
    var hashes = ["intro", "about", "projects"];
    if (window.location.hash) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        // hash found
        console.log(hash);

        if (hashes[0] == hash) {
            document.getElementById("dot-one").classList.replace("origin", "bolded")
        }else {
            document.getElementById("dot-one").classList.replace("bolded", "origin")
        }
        if (hashes[1] == hash) {
            document.getElementById("dot-two").classList.replace("origin", "bolded")
        }else {
            document.getElementById("dot-two").classList.replace("bolded", "origin")
        }
        if (hashes[2] == hash) {
            document.getElementById("dot-three").classList.replace("origin", "bolded")
        }else {
            document.getElementById("dot-three").classList.replace("bolded", "origin")
        }

    } else {
        // No hash found
    }
}