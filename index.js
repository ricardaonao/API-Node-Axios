//Axios, vem cá...
const axios = require ('axios');

//"Solicito (GET) que você vá lá nessa rota e traga o que tem lá."
axios.get('https://jsonplaceholder.typicode.com/users')

//"Quando voltar, então (then), pegue estes dados e mostre no console ."
    .then(function (response) {
        console.log(response);
    })
    

