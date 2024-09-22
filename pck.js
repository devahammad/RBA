

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

  const forms = document.querySelectorAll("#submit-form, #submit-form2, #submit-form3, #submit-form4");

  // List of restricted words (case-insensitive)
  const restrictedWords = ["ikka", "fafa", "faisal ikka", "faizal ikka", "randathani", "A plus", "plus", "Aplus"];

  // Function to check if a value contains restricted words
  function containsRestrictedWords(value) {
    const lowerCaseValue = value.toLowerCase();
    return restrictedWords.some(word => lowerCaseValue.includes(word));
  }

  // Function to check if the name is gibberish (e.g., random letters)
  function isGibberish(name) {
    return /^[a-zA-Z]{2,}$/.test(name) && /([a-zA-Z])\1{2,}/.test(name);
  }

  // Function to validate names
  function validateName(nameValue) {
    const trimmedName = nameValue.trim();

    // Check if the first letter of the first name is capitalized
    const firstLetterCapitalRegex = /^[A-Z][a-zA-Z]*(?:\s[a-zA-Z]+)?$/;

    if (!trimmedName || !firstLetterCapitalRegex.test(trimmedName) || containsRestrictedWords(trimmedName) || isGibberish(trimmedName)) {
      return false;
    }

    return true;
  }

  // Function to validate reCAPTCHA
  function validateCaptcha() {
    const captchaResponse = grecaptcha.getResponse();
    const captchaError = document.querySelector("#captcha-error");
    
    if (!captchaResponse) {
      captchaError.textContent = "Please complete the CAPTCHA.";
      return false;
    } else {
      captchaError.textContent = "";
      return true;
    }
  }

  function validateForm(event, form) {
    let isValid = true;

    // Name validation
    const nameField = form.querySelector("#fname");
    const nameError = form.querySelector("#name-error");
    const nameValue = nameField.value;

    if (!validateName(nameValue)) {
      nameError.textContent = "Please enter a valid name. (First letter of the name must be capitalized, no special characters)";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Email validation
    const emailField = form.querySelector("#lname");
    const emailError = form.querySelector("#email-error");
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

    // Phone validation: allow +, - and ensure length is 9-15 characters
    const phoneField = form.querySelector("#phone");
    const phoneError = form.querySelector("#phone-error");
    const phoneValue = phoneField.value.trim();

    if (!phoneValue) {
      phoneError.textContent = "Please enter your phone number.";
      isValid = false;
    } else if (!/^[+\-0-9]+$/.test(phoneValue) || containsRestrictedWords(phoneValue)) {
      phoneError.textContent = "Phone number must contain only digits, '+' or '-' and no restricted words.";
      isValid = false;
    } else if (phoneValue.length < 9 || phoneValue.length > 15) {
      phoneError.textContent = "Phone number must be 9 to 15 characters long.";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Website Type validation
    const websiteTypeField = form.querySelector("#notes");
    const websiteTypeError = form.querySelector("#notes-error");
    const websiteTypeValue = websiteTypeField.value.trim();

    if (!websiteTypeValue) {
      websiteTypeError.textContent = "Please complete this.";
      isValid = false;
    } else if (containsRestrictedWords(websiteTypeValue)) {
      websiteTypeError.textContent = "Give valid type or duration";
      isValid = false;
    } else {
      websiteTypeError.textContent = "";
    }

    // CAPTCHA validation
    if (!validateCaptcha()) {
      isValid = false;
    }

    // Block submission if form is invalid
    if (!isValid) {
      event.preventDefault();
      form.querySelector(".submitBtn").disabled = true;
    } else {
      form.querySelector(".submitBtn").disabled = false;
    }
  }

  // Enable/disable submit button based on CAPTCHA state
  window.onCaptchaSuccess = function() {
    forms.forEach((form) => {
      form.querySelector(".submitBtn").disabled = false;
    });
  };

  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      validateForm(event, form);
      if (!event.defaultPrevented) {
        form.querySelector(".submitBtn").disabled = false;
      }
    });

    form.addEventListener("input", function (event) {
      validateForm(event, form);
    });
  });
});




  

