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
}