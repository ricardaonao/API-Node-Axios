# Consumindo API somente com Axios
## Objetivo deste código 🎯
Demonstrar a forma mais simples se consumir uma API utilizando o **Axios**. 

## O que vamos usar. 🧰
- Node.js 
- Axios 
- Endpoint / API  


## Configurando Ambiente 📗
 Instale o **Noode.Js** (caso não tenha, acesse o site do Node.js https://nodejs.org/en/, baixe a versão LTS, e instale. Next, next, next...), instale os seguintes pacotes utilizando seu terminal:


* **Axios** : Cliente **HTTP** assíncrono e baseado em *promisses*. Seu trabalho é facilitar as solicitações HTTP dos *verbos* CRUD, que serão feitas as rotas ou *endpoints*.<br> <br>
`npm install --save axios`<br> <br>

* **API** : Fonte de dados que serão exibidos na tela. Utilizaremos uma API ou endpoint ficitícia: APIs *fake*, foram criadas para testarmos nossas aplicações. Existem diversas, iremos utilizar uma pequena lista de usuários.<br> <br>
https://jsonplaceholder.typicode.com/users<br> <br>



>Dica : A flag `--save` significa que este pacote ficará regitrado no package.json.<br>




## Testando Aplicação 🕹

Se você clonou o repositório ou seguiu os passos acima, digite no seu terminal o comando: <br> <br>
`node index.js` <br>

E veja o resultado em seu terminal<br>


## Conclusão 🏆
Com poucas linhas de código, é possível consumir dados de qualquer API gracas a ferramentas simples e gratuitas como **Node.js e Axios**. <br>

Claro você pode melhorar este projetinho, aplicando boas praticas como tratamento de erros como try/catch e deixa-lo mais moderno e atual utilizando o *async/await*. 😉

## Dica 📌
Dentro do arquivo *package.json*, na seção "*start*" você pode "simplificar" o comando para inicializar o node e o ativar o axios. Por padrão, era preciso digitar no terminal: `node index.js` mas você pode subistituir o *start* por: <br><br>
 `"scripts": {
    "dev": "node index.js"
  },`. <br><br>
  Essa alteração é opcional. <br> <br>
←[Voltar para lista anterior](https://github.com/ricardaonao/APIs)
____________________________________________________________________
Autoria: Ricardo Souza 
