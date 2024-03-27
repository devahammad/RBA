var isNavOpen = false;

function openNav() {
    var navElement = document.getElementById("myNav");
    var overlayContent = document.querySelectorAll('.spNav');
    var openBtns = document.querySelectorAll('.openbtn');
    var closeBtns = document.querySelectorAll('.closebtn');

    if (!isNavOpen) {
        navElement.style.height = "100%";
        isNavOpen = true;
        for (var i = 0; i < overlayContent.length; i++) {
            overlayContent[i].style.opacity = "1";
            overlayContent[i].style.paddingTop = "1em";
        }
        for (var i = 0; i < openBtns.length; i++) {
            openBtns[i].style.opacity = "0";
            openBtns[i].style.paddingTop = "1.5em";

        }
        for (var i = 0; i < closeBtns.length; i++) {
            closeBtns[i].style.opacity = "1";
            closeBtns[i].style.paddingTop = "1em";

        }
    }
}

function closeNav() {
    var navElement = document.getElementById("myNav");
    var overlayContent = document.querySelectorAll('.spNav');
    var openBtns = document.querySelectorAll('.openbtn');
    var closeBtns = document.querySelectorAll('.closebtn');
    if (isNavOpen) {
        navElement.style.height = "0%";
        isNavOpen = false;
        for (var i = 0; i < overlayContent.length; i++) {
            overlayContent[i].style.opacity = "0";
            overlayContent[i].style.paddingTop = "5px";
        }
        for (var i = 0; i < openBtns.length; i++) {
            openBtns[i].style.opacity = "1";
            openBtns[i].style.paddingTop = "0em";
        }
        for (var i = 0; i < closeBtns.length; i++) {
            closeBtns[i].style.opacity = "0";
            closeBtns[i].style.paddingTop = "0em";
        }
    }
}

