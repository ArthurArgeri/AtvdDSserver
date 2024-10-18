const Sequelize = require("sequelize");
const Express = require("express");

const a = Express();

const conexaoComBanco = new Sequelize("banco", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

conexaoComBanco
.authenticate()
.then(function (){
    console.log("Conexão realizada com sucesso!");
})
.catch(function (err) {
    console.log("Erro ao conectar com o banco de dados: " + err);
});

const Postagem = conexaoComBanco.define("postagens", {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT,
    },
});

Postagem.create({
    titulo: "titulo exemplo",
    conteudo: "conteudo exemplo",
});

/*
Postagem.sync({force: true});
**/

/*
a.get("/", function() {
    conexaoComBanco.get("select * from aluno");
})

a.listen(3031, function () {
    console.log("Server is running on port 3031");
  });
**/