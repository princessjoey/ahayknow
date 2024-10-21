<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the form
    $name = $_POST['name'];

    // Process the data (e.g., send an email, save to a database)
    // ...

    // Display a success message
    echo "Thank you for submitting your name, $name!";
} else {
    // Display the form
    ?>
    <!-- Form is already in index.html -->
    <?php
}
?>