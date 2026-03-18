let produtos = []

function carregarProdutos() {
    fetch("produtos.json")
        .then(resposta => resposta.json())
        .then(dados => {
            produtos = dados
            mostrarProdutos(produtos)
        })
}

function mostrarProdutos(lista) {

    const container = document.getElementById("produtos")

    container.innerHTML = ""

    if (lista.length === 0) {

        container.innerHTML = "<p class='sem-produtos'>Nenhum produto encontrado.</p>"

        return

    }

    lista.forEach(produto => {

        const div = document.createElement("div")

        div.className = "card-produto"

        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p class="descricao">${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarCarrinho(${produto.id})">
                Adicionar ao Carrinho
            </button>
        `

        container.appendChild(div)

    })

}
