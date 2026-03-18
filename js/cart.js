let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

function adicionarCarrinho(id) {

    const produto = produtos.find(p => p.id === id)

    carrinho.push(produto)

    salvarCarrinho()

    atualizarCarrinho()

    // Feedback ao usuário usando Promise
    mostrarMensagem("Produto adicionado ao carrinho!")

}

function atualizarCarrinho() {

    const lista = document.getElementById("lista-carrinho")

    const totalElemento = document.getElementById("total")

    lista.innerHTML = ""

    let total = 0

    carrinho.forEach(item => {

        const li = document.createElement("li")

        li.textContent = item.nome + " - R$ " + item.preco.toFixed(2)

        lista.appendChild(li)

        total += item.preco

    })

    totalElemento.textContent = total.toFixed(2)

}

function salvarCarrinho() {

    localStorage.setItem("carrinho", JSON.stringify(carrinho))

}

function mostrarMensagem(texto) {

    new Promise(resolve => {

        const mensagem = document.getElementById("mensagem")

        mensagem.textContent = texto

        setTimeout(resolve, 2000)

    }).then(() => {

        const mensagem = document.getElementById("mensagem")

        mensagem.textContent = ""

    })

}
