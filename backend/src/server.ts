import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log("Listagem de usuários");
  response.send("Hello");
});

app.listen(3333, () =>{
  console.log("Rodando na porta 3333");
});