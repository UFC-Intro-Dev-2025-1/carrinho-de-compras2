const produtos = [
    { nome: 'feijão', preco: 2.5 },
    { nome: 'Banana', preco: 1.8 },
    { nome: 'Leite', preco: 4.2 },
    { nome: 'Pão francês', preco: 0.6 },
    { nome: 'Tomate', preco: 3.0 },
    { nome: 'Cenoura', preco: 2.2 },
    { nome: 'Carne bovina', preco: 25.0 },
    { nome: 'Água mineral', preco: 1.5 },
    { nome: 'Queijo', preco: 6.5 },
    { nome: 'Suco de laranja', preco: 5.0 },
];

function listarProdutos(): void {
    for (let i = 0; i < produtos.length; i++) {
        console.log(
            `${i} Nome:${produtos[i].nome} - Preço: R$ ${produtos[
                i
            ].preco.toFixed(2)}`
        );
    }
}
listarProdutos();

const carrinhoDeCompras: any[] = [];
let valortotal: number = 0;

function adicionarProduto(id: number, qtd: number): void {
    let produto = { nome: produtos[id].nome, valor: produtos[id].preco * qtd };
    carrinhoDeCompras.push(produto);
}

function mostrarCarrinho(): void {
    for (let i = 0; i < carrinhoDeCompras.length; i++) {
        console.log(
            `${i} Nome: ${
                carrinhoDeCompras[i].nome
            } - Valor: R$ ${carrinhoDeCompras[i].valor.toFixed(2)}`
        );
        valortotal += carrinhoDeCompras[i].valor;
    }
    console.log(`-- Valor total: R$ ${valortotal.toFixed(2)}`);
}

function removerProduto(id: number) {
    console.log(
        `Removendo produto ${carrinhoDeCompras[id].nome} de valor R$ ${carrinhoDeCompras[id].valor}`
    );
    valortotal -= carrinhoDeCompras[id].valor;
    carrinhoDeCompras.splice(id);
}
