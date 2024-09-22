

// For Body 2 // 


document.addEventListener('DOMContentLoaded', function () {
    const scrollableContent = document.getElementById('scrollable-content');
    const cards = document.querySelectorAll('.card');
    const scrollSpeed = 1; // Pixels moved per frame
    let isUserInteracting = false; // Flag to check if the user is interacting
    let startX, scrollLeft;

    // Check if the device is mobile or tablet
    const isMobileOrTablet = window.innerWidth <= 768; // Adjust this value as needed

    if (isMobileOrTablet) {
        // Clone cards to create a continuous loop effect
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            scrollableContent.appendChild(clone);
        });

        const totalWidth = scrollableContent.scrollWidth / 2; // Total width for one loop cycle

        // Function to handle automatic scrolling
        function autoScroll() {
            if (!isUserInteracting) { // Only scroll automatically if the user is not interacting
                scrollableContent.scrollLeft += scrollSpeed;

                // Check if we've reached the end of the scroll area (accounting for clones)
                if (scrollableContent.scrollLeft >= totalWidth) {
                    scrollableContent.scrollLeft = 0; // Reset to the start
                }
            }
            requestAnimationFrame(autoScroll); // Continue the loop
        }

        // Start automatic scrolling
        autoScroll();

        // Function to handle touch and mouse drag
        function startInteraction(e) {
            isUserInteracting = true; // Set flag to true when user starts interacting
            startX = e.pageX || e.touches[0].pageX;
            scrollLeft = scrollableContent.scrollLeft;
        }

        function duringInteraction(e) {
            if (!isUserInteracting) return; // Stop function if user is not interacting
            const x = e.pageX || e.touches[0].pageX;
            const walk = (x - startX); // Calculate how far the user has moved the finger/mouse
            scrollableContent.scrollLeft = scrollLeft - walk; // Move the scroll position
        }

        function endInteraction() {
            isUserInteracting = false; // Reset flag when user stops interacting
        }

        // Event listeners for mouse
        scrollableContent.addEventListener('mousedown', startInteraction);
        scrollableContent.addEventListener('mousemove', duringInteraction);
        scrollableContent.addEventListener('mouseup', endInteraction);
        scrollableContent.addEventListener('mouseleave', endInteraction);

        // Event listeners for touch
        scrollableContent.addEventListener('touchstart', startInteraction);
        scrollableContent.addEventListener('touchmove', duringInteraction);
        scrollableContent.addEventListener('touchend', endInteraction);
    } else {
        // Desktop behavior - no automatic scrolling, keep it as it was
        scrollableContent.style.overflowX = 'auto'; // Allow manual horizontal scrolling
    }
});

// For MODAL // 

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#submit-form");
    const submitButton = form.querySelector(".sendbtn");
    const nameError = form.querySelector("#name-error");
    const emailError = form.querySelector("#email-error");
    const messageError = form.querySelector("#message-error");

    // List of restricted words (case-insensitive)
    const restrictedWords = ["ikka", "fafa", "faisal ikka", "faizal ikka", "randathani", "A plus", "plus", "Aplus"];

    function containsRestrictedWords(value) {
        const lowerCaseValue = value.toLowerCase();
        return restrictedWords.some(word => lowerCaseValue.includes(word));
    }

    function isGibberish(name) {
        return /^[a-zA-Z]{2,}$/.test(name) && /([a-zA-Z])\1{2,}/.test(name);
    }

    function validateName(nameValue) {
        const trimmedName = nameValue.trim();
        const firstLetterCapitalRegex = /^[A-Z][a-zA-Z]*(?:\s[a-zA-Z]+)?$/;
        return trimmedName && 
               firstLetterCapitalRegex.test(trimmedName) && 
               !containsRestrictedWords(trimmedName) && 
               !isGibberish(trimmedName);
    }

    function validateForm() {
        let isValid = true;

        // Name validation
        const nameField = form.querySelector("#fname");
        const nameValue = nameField.value;

        if (!validateName(nameValue)) {
            nameError.textContent = "Please enter a valid name. (First letter must be capitalized, no special characters)";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Email validation
        const emailField = form.querySelector("#lname");
        const emailValue = emailField.value.trim();
        const validEmailDomains = [
            "gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "live.com",
            "icloud.com", "mail.com", "zoho.com", "protonmail.com", "yandex.com", "gmx.com"
        ];

        if (!emailValue) {
            emailError.textContent = "Please enter your email address.";
            isValid = false;
        } else if (!emailValue.includes("@") || !validEmailDomains.some(domain => emailValue.endsWith(domain)) || containsRestrictedWords(emailValue)) {
            emailError.textContent = "Please enter a valid email address from a standard provider.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Message validation
        const messageField = form.querySelector("#subject");
        const messageValue = messageField.value.trim();

        if (!messageValue) {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        } else if (containsRestrictedWords(messageValue)) {
            messageError.textContent = "This message cannot be send";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        // Disable submit button if form is invalid
        submitButton.disabled = !isValid;

        return isValid;
    }

    // Modal functions
    function displayModal() {
        var modal = document.getElementById("myModal");
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
    }

    function hideModal() {
        var modal = document.getElementById("myModal");
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }

    function hideModalContent() {
        var modalContent = document.getElementById("modalContent");
        modalContent.style.display = "none";
    }

    function showSpinner() {
        var spinner = document.getElementById("spinner");
        spinner.style.display = "flex"; // Set to flex to center the blades
    }

    function hideSpinner() {
        var spinner = document.getElementById("spinner");
        spinner.style.display = "none";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        if (validateForm()) {
            hideModalContent(); // Hide only the modal content
            showSpinner(); // Show the spinner

            // Simulate form submission delay
            setTimeout(function () {
                // Handle successful form submission logic here

                hideSpinner(); // Hide the spinner
                hideModal(); // Hide the entire modal after form submission
            }, 3000); // Adjust the delay as needed
        }
    });

    // Validate form inputs on input events
    form.addEventListener("input", validateForm);

    document.getElementById("closeButton").addEventListener("click", hideModal);

    // Initial display of the modal
    setTimeout(displayModal, 10000);
});


// For FAQ // 

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const link = item.querySelector('.accordion-link');

    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Toggle the 'active' class on the clicked item
      item.classList.toggle('active');

      // Close other items when one is opened
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
});
