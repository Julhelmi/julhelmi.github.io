<?php
// Created by Julhelmisa Putra 

$servername = "localhost";
$database = "db_tugasUser";
$username = "root";
$password = "";


// // Membuat koneksi
$conn = mysqli_connect($servername, $username, $password, $database);

// Memeriksa Koneksi
if (!$conn) {
    die("Koneksi Gagal : " . mysqli_connect_error());
} else {
    // Created by Julhelmisa Putra
}
?>