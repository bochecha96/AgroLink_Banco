let contador = 0;
const btnAdd = document.querySelector(".adcProdButton");
const tabela = document.querySelector("tbody");

function addProduto() {
  // Pega os valores dos inputs
  const nome = document.getElementById("nome").value;
  const peso = document.getElementById("peso").value + "kg";
  const categoria = document.getElementById("categoria2").value;
  const quantidade = document.getElementById("quantidade").value;
  const valor = "R$ " + parseFloat(document.getElementById("valor2").value).toFixed(2);

  // Verifica se todos os campos foram preenchidos
  if (nome && peso && categoria && quantidade && valor) {
    
    ++contador;
    // Cria uma nova <tr> com as informações dos imputs
    const novaLinha = document.createElement("tr");
    novaLinha.id = `linha_${contador}`;

    novaLinha.innerHTML = `
      <td><div class="imgtit"><img src="img/produtos-agricolas.png" alt="Produto">${nome}</div></td>
      <td class="anula">${peso}</td>
      <td class="anula">${categoria}</td>
      <td>${quantidade}</td>
      <td>0</td> <!-- Valor padrão para 'vendidos' -->
      <td>${valor}</td>
      <td class="delet"><button onclick="deletarLinha(${contador})"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="white" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button></td>
    `;

    // Adiciona uma nova linha na tabela
    tabela.appendChild(novaLinha);

    // Limpa os campos de input
    document.getElementById("nome").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("categoria2").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("valor2").value = "";

    document.getElementById('conteinerAdicionar').style.display = 'none';

  } else {
    alert("Preencha todos os campos.");
  }
}

// Função para remover uma linha ao clicar na lixeira
function deletarLinha(id) {
  const linha = document.getElementById(`linha_${id}`);
  if (linha) {
    linha.remove();
  }
}

// Evento para o botão "Adicionar Produto"
btnAdd.addEventListener("click", addProduto);


function AbrirAddItem(valor){
  if(valor === 1 ){
      document.getElementById('conteinerAdicionar').style.display = 'flex';
  }else if(valor === 0){
      document.getElementById('conteinerAdicionar').style.display = 'none';
  }
}