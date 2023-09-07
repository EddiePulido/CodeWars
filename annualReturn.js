let moneyNow = parseFloat(readline());
const annualRateOfReturn = parseFloat(readline());
const annualGenieMoney = parseFloat(readline());
const yourAge = parseInt(readline());

let years = 0

while(moneyNow < 1000000){
    moneyNow += (moneyNow * annualRateOfReturn) / 100 + annualGenieMoney
    years++
}

console.log(yourAge + years);