<?php
// Created by Julhelmisa Putra 

require 'koneksi.php';
$fullname = $_POST["fullname"];
$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$number = $_POST["number"];

$query_sql = "INSERT INTO tabel_user (fullname, username, email, password, number)
                VALUES ('$fullname', '$username', '$email', '$password', '$number')";

if (mysqli_query($conn, $query_sql)) {
    echo "<script type='text/javascript'>alert('Pendaftaran berhasil. Silahkan Login kembali');
    window.location.href='index.html'</script>";
} else {
    echo "Pendaftaran Gagal : " . mysqli_error($conn);
    // Created by Julhelmisa Putra 
}
?>