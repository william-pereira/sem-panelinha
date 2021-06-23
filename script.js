
let nomes = [];
let sorteio = [];
var divisao = [];
var qtde = document.getElementById('opcoes');
var jogadores = qtde.options[qtde.selectedIndex].value;
var resultado = document.getElementById('resultado_times')
var vazio = "";
var valida = 0;
// Função para armazenar o nome digitado dentro de um array + Validação para verificar se o nome já foi digitado.
function capturar()
{
    var capturando = document.getElementById("nome").value;
    if (capturando == "")
    {
      document.getElementById('validacao').innerHTML = "Campo nome está em branco!";
    } else
    {
      if (nomes.indexOf(capturando) === -1)
        {
          nomes.push(capturando);
          document.getElementById('validacao').innerHTML = " ";
          document.getElementById("teste").innerHTML = nomes.join(', ');
          document.getElementById("numero-players").innerHTML = nomes.length;
          document.getElementById('nome').value = "";
          document.getElementById('nome').focus();
        }
        else if (nomes.indexOf(capturando) > -1)
        {
          document.getElementById('validacao').innerHTML = "Nome já incluso na lista!";
        }
    }
}

// Função para ordenar os números e embaralhar os resultados sem repetí-los
function sortear()
{
  var qtde = document.getElementById('opcoes');
  var jogadores = parseInt(qtde.options[qtde.selectedIndex].value);
  var aleatorio = [];
  var lista = [];
      for (var i = 0; i < nomes.length; i++) 
      {
        var temp = Math.floor(Math.random() * nomes.length)
          if(aleatorio.indexOf(temp) == -1)
          {
            aleatorio.push(temp);
            lista.push(nomes[temp]);
          }
          else
          {
            i--;
          }
      }

// dividindo os valores embaralhados de acordo com a quantidade de jogadores por time
	divisao = [];
for (var c = 0; c < lista.length; c = c + jogadores)
    {
      divisao.push(lista.slice(c, c + jogadores));
    }
var proximo = divisao[divisao.length - 1];
var times = lista.length / jogadores;
if( times % 1 != 0 )
      {
      var quantidade_times = Math.trunc(lista.length / jogadores);
      document.getElementById("random").innerHTML = '<span class="proximos">Próximos:</span> ' + proximo.join(', ');
      }
        else
        {
        var quantidade_times = Math.trunc(lista.length / jogadores);
        document.getElementById("random").innerHTML = "";
}
	
// inclui os times separadamente na tela.

document.getElementById('resultado_times').innerHTML = "";

for (var contador = 0; contador < quantidade_times; contador++)
      {
            var lugar_times = document.createElement("p");
            var titulo_times = document.createElement("p");
            var div_times = document.createElement("div");
            titulo_times.className = "titulo-times"
            lugar_times.className = "times"
            div_times.className = "div-times"
            var texto_de_titulo_times = document.createTextNode("Time " + (contador + 1));
            var texto_de_lugar_time = document.createTextNode(divisao[contador].join('\n'));
            console.log(texto_de_lugar_time)

            titulo_times.appendChild(texto_de_titulo_times);
            lugar_times.appendChild(texto_de_lugar_time);
            resultado.appendChild(div_times);
            div_times.appendChild(titulo_times);
            div_times.appendChild(lugar_times); 
      }
}

function remover() {
  nomes.pop();
  document.getElementById("numero-players").innerHTML = "";
  document.getElementById("numero-players").innerHTML = nomes.length;
  document.getElementById("teste").innerHTML = nomes.join(', ');
  document.getElementById("random").innerHTML = "";
  
}
// Mudar o estilo de equipes conforme o número for selecionado na tag select/option
function times() {
  var jogadores = parseInt(qtde.options[qtde.selectedIndex].value);
  switch (jogadores) {
    case 2 : document.getElementById('escolha-times').innerHTML = "Dupla";
    break;
    case 3: document.getElementById('escolha-times').innerHTML = "Trio";
    break;
    case 4: document.getElementById('escolha-times').innerHTML = "Quarteto";
    break;
    case 5: document.getElementById('escolha-times').innerHTML = "Quinteto";
    break;
    case 6: document.getElementById('escolha-times').innerHTML = "Sexteto";
    break;
  }
}
document.getElementById('nome').addEventListener('keydown', function(event){
  if (event.keyCode == 13)
  {
    capturar();
  }
});