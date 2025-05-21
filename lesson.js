const som = document.getElementById('som');
const usd = document.getElementById('usd');
const eur = document.getElementById('eur');

// Курсы (замени на актуальные при необходимости)
const usdRate = 89; // 1 USD = 89 KGS
const eurRate = 97; // 1 EUR = 97 KGS

function convertFromSom() {
    const somValue = parseFloat(som.value);
    if (!isNaN(somValue)) {
        usd.value = (somValue / usdRate).toFixed(2);
        eur.value = (somValue / eurRate).toFixed(2);
    } else {
        usd.value = eur.value = '';
    }
}

function convertFromUsd() {
    const usdValue = parseFloat(usd.value);
    if (!isNaN(usdValue)) {
        som.value = (usdValue * usdRate).toFixed(2);
        eur.value = ((usdValue * usdRate) / eurRate).toFixed(2);
    } else {
        som.value = eur.value = '';
    }
}

function convertFromEur() {
    const eurValue = parseFloat(eur.value);
    if (!isNaN(eurValue)) {
        som.value = (eurValue * eurRate).toFixed(2);
        usd.value = ((eurValue * eurRate) / usdRate).toFixed(2);
    } else {
        som.value = usd.value = '';
    }
}
som.addEventListener('input', convertFromSom);
usd.addEventListener('input', convertFromUsd);
eur.addEventListener('input', convertFromEur);
