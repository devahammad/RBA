$(document).ready(function() {
  $('#contact-form').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      var username = $('#username').val();
      var email = $('#email').val();
      var message = $('#message').val();
  
      var messageToTelegram = "**New Enquiry**\n\n" +
          "Name: " + username + "\n\n" +
          "Email: " + email + "\n\n" +
          "Message: " + message;
  
     // Replace with your Telegram bot API endpoint
     var telegramApiUrl = 'https://api.telegram.org/bot7000835701:AAFZfPlO7R9n55pSORl1iIDWh29AVjHOZBo/sendMessage';
  
     // Replace '<YourChatID>' with your actual chat ID
     var chatId = '5405301126';
  
      // Send the message to Telegram using $.ajax
      $.ajax({
          url: telegramApiUrl,
          method: 'POST',
          data: {
              chat_id: chatId,
              text: messageToTelegram
          },
          success: function(data) {
              if (data.ok) {
                  // Clear form fields
                  $('#username').val('');
                  $('#email').val('');
                  $('#message').val('');
              } else {
                  showAlert('Submission failed.');
              }
          },
      });
  });

  function showAlert(message) {
      // Display alert message
      alert(message);
  }
});
