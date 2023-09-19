const prompt = require("prompt-sync")()

const cliente = 0;
console.log("cliente:", cliente+1)
const nomeCliente = prompt("Digite o nome do cliente aqui: ");
console.log("nome:",nomeCliente)
const idadeCliente = prompt("Digite a idade do cliente aqui: ");
console.log("idade:",idadeCliente)
const eMembro = true;
console.log("status: " + eMembro);



/* ~~~javascript
Cliente 1: 
nome: "Alberto"
idade: 15
status: true;
~~~




- Crie três constantes: nomeCliente, idadeCliente e eMembro para armazenar informações sobre um cliente específico.
- Certifique-se de usar o tipo de dado apropriado para cada constante (string, number, bool).

- Agora, cada integrante do grupo precisará alterar os valores das constantes para representar outro funcionário
e exibir as informações desse novo funcionário no console.

- Assim que isso for feito, voce deverá criar uma branch e enviar as atualizacoes para a sua respectiva branch. 

Feito isso, voce deverá criar um Pull request endereçado a `main/master` do projeto.*/
