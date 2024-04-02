// Variable to track if the navigation is open
var isNavOpen = false;

// Function to open the navigation
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

    // Disable scrolling when nav is open
    disableScroll();
  }
}

// Function to close the navigation
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

    // Enable scrolling when nav is closed
    enableScroll();
  }
}

// Function to disable scrolling
function disableScroll() {
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

// Function to enable scrolling
function enableScroll() {
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

// Code to hide starting page after 3 seconds
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelector('.starting-page').classList.add('hide');
  }, 3000); 
});

// Code to hide loading page after all content is loaded
window.addEventListener('load', function() {
  var loadingPage = document.querySelector('.loading-page');
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
    behavior: 'smooth'
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const dotsContainer = document.getElementById("dots-container");
    const boxes = document.querySelectorAll(".box");
  
    // Create dots based on the number of boxes
    boxes.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 1) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => scrollToBox(index));
      dotsContainer.appendChild(dot);
    });
  
    // Scroll to the selected box
    function scrollToBox(index) {
      const boxWidth = document.querySelector('.box').offsetWidth;
      const scrollLeft = index * boxWidth;
      document.querySelector('.boxes').scrollTo({ left: scrollLeft, behavior: 'smooth' });
      updateActiveDot(index);
    }
  
    // Update active dot based on scroll position
    function updateActiveDot(index) {
      const boxWidth = document.querySelector('.box').offsetWidth;
      const scrollLeft = document.querySelector('.boxes').scrollLeft;
      const newIndex = Math.round(scrollLeft / boxWidth);
      const dots = document.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        if (i === newIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
  
    // Listen for scroll event on the .boxes container
    document.querySelector('.boxes').addEventListener('scroll', () => {
      updateActiveDot();
    });
  
    // Initially update active dot based on initial scroll position
    updateActiveDot();
  });
  // Center the initially selected box
const boxesContainer = document.querySelector('.boxes');
const boxes = document.querySelectorAll('.box');
const boxWidth = boxes[0].offsetWidth;
const scrollOffset = (boxesContainer.offsetWidth - boxWidth) / 2;

boxesContainer.scrollLeft = boxes[1].offsetLeft - scrollOffset;

// Add event listener to adjust scroll position on resize
window.addEventListener('resize', () => {
  boxesContainer.scrollLeft = boxes[1].offsetLeft - scrollOffset;
});

  
  
  
  
  