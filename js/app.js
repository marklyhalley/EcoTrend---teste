let categoriaAtual = "todos"

document.addEventListener("DOMContentLoaded", () => {

    carregarProdutos()

    atualizarCarrinho()

    configurarFiltros()

    configurarFiltroPreco()

})

function configurarFiltros() {

    const botoes = document.querySelectorAll("#filtros button")

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            botoes.forEach(b => b.classList.remove("ativo"))

            botao.classList.add("ativo")

            categoriaAtual = botao.dataset.categoria

            aplicarFiltros()

        })

    })

}

function configurarFiltroPreco() {

    const range = document.getElementById("range-preco")

    const valor = document.getElementById("valor-preco")

    range.addEventListener("input", () => {

        valor.textContent = range.value

        aplicarFiltros()

    })

}

function aplicarFiltros() {

    const precoMax = Number(document.getElementById("range-preco").value)

    let filtrados = produtos.filter(p => p.preco <= precoMax)

    if (categoriaAtual !== "todos") {

        filtrados = filtrados.filter(p => p.categoria === categoriaAtual)

    }

    mostrarProdutos(filtrados)

}

function limparCarrinho() {

    carrinho = []

    salvarCarrinho()

    atualizarCarrinho()

}
