document.addEventListener('DOMContentLoaded', function () {
// Utilitário para formatar moeda (R$)
function moeda(valor) {
return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BR'}).format(valor);
}

// normaliza entrada (troca vírgula por ponto e converte para número)
function toNumber(val){
    if (typeof val === 'number') return val;
    if (!val && val !=== 0) return NaN;
    return parseFloat(String(val).trim().replace(',', '.'));
}

const form = document.getElementById('form');
const erro = document.getElementById('erro');
const resultados = document.getElementById('resultados');
const tabelaSecao = document.getElementById('tabelaSecao');

const outProcoComDesconto = document.getElementById('precoComDesconto');
const outValorParcela = document.getElementById('valorParcela');
const outTotalPagar = document.getElementById('economia');

if (!form) {
    console.error('form não encontrado (id="form"). Verifique o HTML.');
    return;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    erro.textContent = '';

    try {
        // Ler entradas(aceitar vírgula em números)
        const preco = toNumber(document.getElementById('preco').value);
        const desconto = toNumber(document.getElementById('desconto').value);
        const taxa = toNumber(document.getElementById('taxa').value);
        const parcelasRaw = document.getElementById('parcelas').value;
        const parcelas = parseInt(String(parcelasRaw).replace(',', ''),10);

        // Validações
        if (isNaN(preco) || preco <= 0) throw new Error('Informe um preço válido (> 0).');
        if (isNaN(desconto) || desconto < 0) throw new Error('Desconto deve ser ≥ 0.');
        if (isNaN(taxa) || taxa < 0) throw new Error('Taxa deve ser ≥ 0.');
        if (isNaN(parcelas) || parcelas < 1) throw new Error('Número de parcelas deve ser ≥ 1.');

        //Cálculos
        const precoComDesconto: preco * (1 - desconto / 100);






    }   
}
}