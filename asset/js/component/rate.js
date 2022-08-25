//Currency converter

function convertToEur(currency, amount){

    let rub = 0.016;
    let usd = 0.98;
    let gbp = 1.19;


    if (currency = 'USD') {
        return amount*0.98;
    }
    if (currency = 'GBP') {
        return amount*1.19;
    }
    if (currency = 'RUB') {
        return amount*0.016;
    }
}


