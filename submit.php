<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $secretKey = "6Lc5h0kqAAAAAJyaJ9UviV7vWeNK_Rr_7NEfaoN4";
    $responseKey = $_POST['g-recaptcha-response'];
    $userIP = $_SERVER['REMOTE_ADDR'];

    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
    $response = file_get_contents($url);
    $responseKeys = json_decode($response, true);

    if (intval($responseKeys["success"]) !== 1) {
        echo "Please complete the CAPTCHA";
    } else {
        echo "CAPTCHA passed, form successfully submitted!";
        // Process the form data here
    }
}
?>
