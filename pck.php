<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Collect form data
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $phone = htmlspecialchars($_POST['Phone']);
    $website_type = htmlspecialchars($_POST['Website_Type']);
    $main_usage = htmlspecialchars($_POST['Main_Usage']);
    $package_type = htmlspecialchars($_POST['Package_Type']);

    // Here you can process the data (e.g., save to database, send an email, etc.)
    // For now, let's just display the data (for testing purposes)
    echo "<h1>Form Data Submitted</h1>";
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Phone: $phone</p>";
    echo "<p>Type of Website: $website_type</p>";
    echo "<p>Main Usage: $main_usage</p>";
    echo "<p>Package Type: $package_type</p>";

    // URL for external form submission
    $url = "https://script.google.com/macros/s/AKfycbyjM-rWP8IUAzOqSWLARHrHvA0FfduZNRsWPP6w46AFuEw2oA_Ww7iPWi5hJSLlGrkouA/exec";  // Replace with the actual URL for form submission

    // Initialize cURL session
    $ch = curl_init($url);

    // Prepare form data for external submission
    $postData = http_build_query($_POST);

    // Set cURL options
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute the POST request
    $response = curl_exec($ch);

    // Handle response or errors
    if ($response !== false) {
        echo "<p>External form submitted successfully: " . htmlspecialchars($response) . "</p>";
    } else {
        echo "<p>Error submitting external form: " . htmlspecialchars(curl_error($ch)) . "</p>";
    }

    // Close cURL session
    curl_close($ch);

    // Redirect or further processing can be added here
    // Example: header('Location: thank_you_page.php');
} else {
    echo "Invalid request method.";
}
?>
