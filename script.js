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

        // Get the current scroll position
        var scrollPosition = [
          self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
          self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        ];
        // Get the current width of the body
        var bodyStyle = window.getComputedStyle(document.body);
        var bodyWidth = parseInt(bodyStyle.width, 10);
        // Calculate the scroll bar width
        var scrollBarWidth = window.innerWidth - bodyWidth;
      
        // Add styles to the body to disable scrolling
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition[1]}px`;
        document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
      
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
    
    // Get the previous scroll position
    var scrollPosition = parseInt(document.body.style.top || '0', 10);
  
    // Remove styles to enable scrolling
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
  
    // Scroll back to the previous position
    window.scrollTo(scrollPosition, scrollPosition);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.starting-page').classList.add('hide');
    }, 3000); 
});


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

        // Get the current scroll position
        var scrollPosition = [
          self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
          self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        ];
        // Get the current width of the body
        var bodyStyle = window.getComputedStyle(document.body);
        var bodyWidth = parseInt(bodyStyle.width, 10);
        // Calculate the scroll bar width
        var scrollBarWidth = window.innerWidth - bodyWidth;
      
        // Add styles to the body to disable scrolling
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition[1]}px`;
        document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
      
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
    
    // Get the previous scroll position
    var scrollPosition = parseInt(document.body.style.top || '0', 10);
  
    // Remove styles to enable scrolling
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
  
    // Scroll back to the previous position
    window.scrollTo(scrollPosition, scrollPosition);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.starting-page').classList.add('hide');
    }, 3000); 
});

    // Add event listener for window load
    window.addEventListener('load', function() {
        var loadingPage = document.querySelector('.loading-page');

        // Hide the loading screen after all content is loaded
        loadingPage.classList.add('hideL');
    });
    // JavaScript to scroll to the center box on page load
window.addEventListener('DOMContentLoaded', () => {
    const boxesContainer = document.querySelector('.boxes');
    const centerBox = document.querySelector('.box2');
    
    // Calculate the scroll position to center the box
    const scrollLeft = centerBox.offsetLeft + centerBox.offsetWidth / 2 - boxesContainer.offsetWidth / 2;
    
    // Scroll to the calculated position
    boxesContainer.scroll({
      left: scrollLeft,
      behavior: 'smooth' // You can change this to 'auto' for instant scrolling
    });
  });
  
