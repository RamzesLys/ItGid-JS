<?php
require_once 'config.php';

$email= trim($_POST['email']);
$name= trim($_POST['name']);
$password = trim($_POST['pass']);
$birthday= trim($_POST['birthday']);

if ($email ==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE users SET name='".$name."', password='".$password."', birthday='".$birthday."' WHERE email='".$email."'";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>