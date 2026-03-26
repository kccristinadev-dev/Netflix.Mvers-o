
<!DOCTYPE html>
<html lang="pt-br">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-
awesome/4.7.0/css/font-awesome.min.css">
 <title>Cadastro - MYSQLI</title>
</head>
<body>
<div>
    
<?php$servername = "localhost";
 $username = "root";
 $password = "usbw";
 $dbname = "pwii";
 $conexao = new mysqli($servername, $username, $password, $dbname);
 if ($conexao->connect_error) {
 die("Connection failed: " . $conexao->connect_error);
 $sql ="INSERT INTO amigo (nome, apelido, email)
VALUES  ('"$_POST['nome']". ','. "$_POST['apelido']". ','. "$_POST['email']")";

if ($conexao->query($sql) === TRUE) {
 echo '
 <a href="index.php">
 <h1 class="mensagem">Amigo Salvo com sucesso! </h1>
 </a>
 ';
} else {
 echo '
 <a href="index.php">
 <h1 class="mensagem"> ERRO! </h1>
 </a>
 ';
 }

 }?>
 </div>
</body>
</html>
