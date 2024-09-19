
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
