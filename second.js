$("#submit-form").submit((e) => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwW4MXsRvIqU1K5Ws4vxcpEfPMRAI9Qy1o3kVQiImxj8VVY2K2nfYI29blK9OZy2dg/exec",
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

