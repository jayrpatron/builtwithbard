<?php

// getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
    }

// Define the database connection variables
$hostname = "localhost";
$username = "u632915356_builtwithbard";
$password = "7M4dr4sL4n31!.";
$database = "u632915356_bwb";

// Create a connection to the database
$conn = mysqli_connect($hostname, $username, $password, $database);

// Insert the entries into the database
$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
$result = mysqli_query($conn, $sql);

// Check if the query was successful
if ($result) {
    echo "The entries were successfully inserted into the database. ";
} else {
    echo "The entries were not inserted into the database. Error: " . mysqli_error($conn);
}

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully.";
mysqli_close($conn);

// Close the connection to the database
mysqli_close($conn);

?>
