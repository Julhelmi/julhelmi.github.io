<?php
// Created by Julhelmisa Putra 

require 'koneksi.php';

$email = $_POST["email"];
$password = $_POST["password"];

$query_sql = "SELECT * FROM tabel_user
                WHERE email = '$email' AND password = '$password'";

$result = mysqli_query($conn, $query_sql);

if (mysqli_num_rows($result) > 0) {
    header("Location: dashboard/dashboard.html");
} else {
    echo "<script type='text/javascript'>alert('Email atau password anda salah.');
    window.location.href='index.html'</script>";
    // echo "<a href='index.html'>Login</a>";
    // echo "<script type='text/javascript'>window.location.href='index.html'";
}

// Created by Julhelmisa Putra 
?>