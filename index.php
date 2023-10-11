<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="main.js"></script>
    <title>Calculadora de IMC</title>
</head>
<body>
<h3>Calculadora de IMC</h3>
<!-- lembrar de conectar o index com a página main -->
<!-- nessa parte, tudo normal. Note que a label tem o mesmo nome do id do input respectivo.
para o botão, chamar a tag button, o onclick vc chama a fórmula do javascript que será processada no clique do botão.
finalmente, note que o p de parágrafo está vazio. assim, ele n aparece. mas está com o id de resposta. assim que for atribuído uma "resposta", ele passará a aparecer.
dúvida: é necessário ou não colocar a id imc nesse botão.  -->
<label for="peso">Insira seu peso (kg)</label><br>
<input id="peso" type="text"><br><br>
<label for="altura">Insira sua altura</label><br>
<input id="altura" type="text"><br><br>
<button type= "calcular" id="imc" Onclick= "calcule()">Calcule</button>
<br><br>
<p id="resposta"></p>

<p>atualização</p>
    
</body>
</html>