# Frontend Challenge!
<img src="https://github.com/GustavoRochaSantos/GustavoRochaSantos/blob/main/developer.gif" width="300" height="250">

Seja bem vindo ao desafio! Queremos conhecer a forma com que você organiza o projeto, codifica, estiliza e entrega seu projeto. É muito importante pensar em cada detalhe e não se preocupe se não souber tudo, leia a documentação e dê o seu melhor.

## O desafio
A equipe comercial está meio perdida, eles não tem uma base completa de clientes ainda e cada um deles tem seu "caderninho" com anotações. É necessário criarmos um CRUD para controlar os dados do cliente.

## Regras
1. Crie um novo fork e branch com seu nome-sobrenome e faça um pull request quando estiver pronto. Iremos fazer code review.
2. Desenvolver o projeto utilizando:
    - HTML e CSS (ou algum pré-processador)
    - Utilizar hooks e componentes funcionais (não classes)
    - Componentização
    - Fazer os commits de cada feature ou fix pronta. Não interessa a quantidade e sim, como você utiliza o GIT.
    - Pode usar SASS, LESS, Tailwind, Material UI, Ant.D, ou qualquer outro que você tenha conhecimento.
3. Bibliotecas
    - UUID https://www.npmjs.com/package/uuidv4
    - Axios https://www.npmjs.com/package/axios

## FrontEnd

|            | Nome        | Empresa     | Telefone    |Email        | Status      |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| :pen: :wastebasket: | Callie Pace | ZENSOR | +1 (877) 469-2279 | calliepace@zensor.com | Inativo |
| :pen: :wastebasket: | Lott Cain | ECLIPTO | +1 (918) 511-2105 | lottcain@eclipto.com | Ativo |
| :pen: :wastebasket: | Kris Moore | ROBOID | +1 (852) 600-2900 | krismoore@roboid.com | Inativo |

## Backend
Afim de focar somente no front, já deixamos um back prontinho pra você consumir, com os endpoints abaixo.


### POST /clients
Cadastrar o cliente com os seguintes campos:
- guid - gerar com uuidv4 *
- name - string * 
- company - string
- email - string *
- phone - string
- address - string
- note - string
- isActive - boolean (default true)

> :warning: **Warning:** \* campos obrigatórios

### GET /clients
A requisição GET irá trazer um json com as informações dos clientes no formato abaixo: 
```json
[
  {
    "guid": "79f4e11e-6fb7-4373-92a8-466d1db3fec5",
    "name": "Callie Pace",
    "company": "ZENSOR",
    "email": "calliepace@zensor.com",
    "phone": "+1 (877) 469-2279",
    "address": "768 Conway Street, Titanic, Guam, 6238",
    "isActive": false
  },
  {
    "guid": "a4433db2-feeb-4385-90e1-2ff77b43c064",
    "name": "Lott Cain",
    "company": "ECLIPTO",
    "email": "lottcain@eclipto.com",
    "phone": "+1 (918) 511-2105",
    "address": "552 Berriman Street, Kennedyville, Oregon, 202",
    "isActive": true
  },
  {
    "guid": "719b1510-7b11-480a-b277-7439755a9a5a",
    "name": "Kris Moore",
    "company": "ROBOID",
    "email": "krismoore@roboid.com",
    "phone": "+1 (852) 600-2900",
    "address": "857 Noble Street, Waukeenah, Tennessee, 4429",
    "isActive": false
  }
]
```

### PUT /clients/GUID
Deve haver um botão na tabela para atualizar os dados do cliente, passando o GUID na rota

### DELETE /clients
Deve haver um botão na tabela para excluir o cliente

## O que vamos avaliar:
    Organização do código;
    Mensagens (em inglês) e mudanças nos commits;
    Composição/reutilização de componentes;
    O motivo de ter escolhido cada tech da stack;
    Como rodar sua aplicação ;)
