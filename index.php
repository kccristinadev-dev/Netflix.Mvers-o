<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projeto - MYSQLI</title>

<style>
* {
      margin: 0;
  padding: 0;
  box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #111;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 60%;
    text-align: center;
}

h1 {
    background: teal;
    color: white;
    padding: 15px;
    border-radius: 10px;
}

.boxes {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.box {
    width: 45%;
    background: #a64ca6;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: 0.3s;
}

.box:hover {
    background: #a64ca6cc;
    transform: scale(1.05);
}

a {
    text-decoration: none;
    color: white;
}

.icon {
    font-size: 100px;
}

.text {
    font-size: 25px;
}
@media (max-width: 700px) {
    .container{
    width: 90%;
        
    }
}

</style>

</head>

<body>

<div class="container">
    <h1>Projeto Lista de Amigos</h1>

    <div class="boxes">
        <div class="box">
            <a href="cadastro.php">
                <div class="icon">➕</div>
                <div class="text">Adicionar</div>
            </a>
        </div>

        <div class="box">
            <a href="listar.php">
                <div class="icon">📇</div>
                <div class="text">Listar</div>
            </a>
        </div>
    </div>
</div>

</body>
</html>