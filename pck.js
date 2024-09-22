
$("#submit-form").submit((e) => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycby30ySEL21IYKoZDM6gvVJeazaF8wX8vEo39wcydwzc86ZQwQaHsZ_-Ymkd_pI0IUQS/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function(response) {
            $("#submit-form")[0].reset();
        },
        error: function(err) {
            alert("Something Error");
        }
    });
});
$("#submit-form2").submit((e) => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyjM-rWP8IUAzOqSWLARHrHvA0FfduZNRsWPP6w46AFuEw2oA_Ww7iPWi5hJSLlGrkouA/exec",
        data: $("#submit-form2").serialize(),
        method: "post",
        success: function(response) {
            $("#submit-form2")[0].reset();
        },
        error: function(err) {
            alert("Something Error");
        }
    });
});
$("#submit-form3").submit((e) => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxXxBFRg0Ll6TBgaTjd_VRhvi204IlGj8tfImgd-KaY6MwIL_SKvw2xK_MDcGS8gy1I6A/exec",
        data: $("#submit-form3").serialize(),
        method: "post",
        success: function(response) {
            $("#submit-form3")[0].reset();
        },
        error: function(err) {
            alert("Something Error");
        }
    });
});

$("#submit-form4").submit((e) => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbya0zNlEgv_12BKcYyMb-QPowApEj_ZvXdhDLBSiy1gCHCMZBNJ3zmzR3ZuKsRIikY/exec",
        data: $("#submit-form4").serialize(),
        method: "post",
        success: function(response) {
            $("#submit-form4")[0].reset();
        },
        error: function(err) {
            alert("Something Error");
        }
    });
});




// For error finder


 document.addEventListener("DOMContentLoaded", function () {
  // Select multiple forms by their ID using querySelectorAll
  const forms = document.querySelectorAll("#submit-form, #submit-form2, #submit-form3, #submit-form4");

  // Function to validate the form and show error messages
  function validateForm(event, form) {
    let isValid = true;
    
    // Name validation
    const nameField = form.querySelector("#fname");
    const nameError = form.querySelector("#name-error");
    if (!nameField.value.trim()) {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    } else {
      nameError.textContent = ""; // Clear error message
    }

    // Email validation
    const emailField = form.querySelector("#lname");
    const emailError = form.querySelector("#email-error");
    if (!emailField.value.trim()) {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailField.checkValidity()) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = ""; // Clear error message
    }

    // Phone validation
    const phoneField = form.querySelector("#phone");
    const phoneError = form.querySelector("#phone-error");
    const phoneValue = phoneField.value.trim();

    if (!phoneValue) {
      phoneError.textContent = "Please enter your phone number.";
      isValid = false;
    } else if (!/^\d+$/.test(phoneValue)) {
      phoneError.textContent = "Phone number must contain only digits.";
      isValid = false;
    } else if (phoneValue.length < 9 || phoneValue.length > 10) {
      phoneError.textContent = "Phone number must be 9 or 10 digits long.";
      isValid = false;
    } else {
      phoneError.textContent = ""; // Clear error message
    }

    // Website Type validation
    const websiteTypeField = form.querySelector("#notes");
    const websiteTypeError = form.querySelector("#notes-error");
    if (!websiteTypeField.value.trim()) {
      websiteTypeError.textContent = "Please complete this";
      isValid = false;
    } else {
      websiteTypeError.textContent = ""; // Clear error message
    }

    // CAPTCHA validation
    const captchaResponse = grecaptcha.getResponse();
    const captchaError = form.querySelector("#captcha-error");
    if (captchaResponse.length === 0) {
      captchaError.textContent = "Please complete the CAPTCHA.";
      isValid = false;
    } else {
      captchaError.textContent = ""; // Clear error message
    }

    // Prevent submission if the form is invalid
    if (!isValid) {
      event.preventDefault(); // Prevent form submission
    }

    return isValid; // Return whether the form is valid
  }

  // Loop through each form and add the validation listener
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      // Validate form fields and prevent submission if invalid
      if (!validateForm(event, form)) {
        event.preventDefault(); // Prevent default form submission behavior
      }
    });
  });
});



