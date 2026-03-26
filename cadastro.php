<!DOCTYPE html>
<html lang="pt-br">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-
awesome/4.7.0/css/font-awesome.min.css">
 <title>Cadastro - MYSQLI</title>
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
    background: #ccc;
    color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Estilo geral do formulário */
form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(128, 0, 128, 0.5);
  font-family: Arial, sans-serif;
  color: #fff;
}
form h2{
    text-align: center;
}

/* Estilo dos inputs e textarea */
input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0 20px 0;
  border: 2px solid #5e00b3;
  border-radius: 5px;
  background: #141414;
  color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* Destaque roxo ao focar */
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus {
  border-color: #a64ca6;
  box-shadow: 0 0 8px #a64ca6;
  outline: none;
}

/* Estilo do botão */
button {
  width: 100%;
  padding: 12px;
  background: #5e00b3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s, box-shadow 0.3s;
}

/* Efeito hover do botão */
button:hover {
  background: #a64ca6;
  box-shadow: 0 0 10px #a64ca6;
}

/* Labels */
label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  color: #d1c0e0;
}

/* Mensagens de erro ou aviso */
span.error {
  color: #ff4d6d;
  font-size: 0.9em;
}
</style></head>
<body>
<a href="index.php" class="">
    <i class="resultado"></i></a>    

    <div class="container-form">
        
    <form class="" action="cadastroAction.php" method="post" accept-charset="utf-8">
        <h2>Cadastre um amigo</h2>
        <label for="codigo"> codigo: 
        <input type="text" name="textid" id="" value="" >
        </label>
    <label for="nome"> Nome: 
    <input type="text" name="nome" id="" value="" >
        </label>
    <label for="Apelido"> Apelido:
    <input type="text" name="apelido" id="" value="" >
        </label>
            <label for="email"> Email
    <input type="text" name="email" id="" value="" >
        </label>
<button type="button" name="botao-adicionar">
    <i>Adicionar</i>
</button>

    </form>
</div>

</body>
</html>
