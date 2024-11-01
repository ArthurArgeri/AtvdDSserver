const Sequelize = require("sequelize");
const Express = require("express");
const cors = require('cors');

const a = Express();
const { create } = require("express-handlebars");

a.use(cors());

const conexaoComBanco = new Sequelize("banco", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

//Rotas
a.get("/", function(req, res) {
    res.send("Hello World");
});

a.get("/teste", function (req, res) {
    res.send("Hello Teste");
});

a.get("/login/:email/:senha/:idade", function (req, res) {
    res.send(req.params);
});

a.get("/htmlteste", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

a.get("/cad", function (req, res) {
    res.render("form");
});

a.get("/exibir", async function (req, res) {
    const posts = await Postagem.findAll();
    res.json(posts);
});

const abs = create({ defalultLayout: "main"});
a.engine("handlebars", abs.engine);
a.set("view engine", "handlebars");

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

/* Postagem.sync({ force: false }); 

 Postagem.create({
    titulo: "titulo exemplo",
    conteudo: "conteudo exemplo",
});  */




a.listen("3031", function () {
    console.log("Server is running in port 3031");
});