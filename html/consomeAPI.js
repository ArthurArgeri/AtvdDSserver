const apiRes = "http://localhost:3031/exibir";

async function resposta() {
    const resposta = await fetch(apiRes);
    const posts = await resposta.json();

    console.log(posts);

    const container = document.getElementById("data");
    container.innerHTML = "";

    posts.forEach((posts) => {
        const dataDiv = document.createElement('div');
        dataDiv.innerHTML = `<p>Nome do filme: ${posts.titulo}</p> <p>Sinopse: ${posts.conteudo}</p> <hr>`
        container.appendChild(dataDiv);
    });
}

window.onload = resposta();