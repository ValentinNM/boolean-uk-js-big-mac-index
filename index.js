const bMacBasePriceUS = 3.57;
const bMacPriceUK = 2.29; // 1,39 euro
let exchbMacPriceUK = 2.0; // exch rate
const bMacPriceILS = 17.0; //  $5.35
let exchbMacPriceILS = 0.3; // exchange rate
const bMacPriceSEK = 52.88; // $6.37
let exchbMacPriceSEK = 0.12; //exchange rate
const bMacPriceNOK = 135; //  $6.09
let exchbMacPriceNOK = 0.11; // 0.11
const bMacPriceCHF = 6.5; // $7.3 // 1.09 exch
let exchbMacPriceCHF = 1.09;

const PPP = bMacBasePriceUS / bMacPriceUK;

let exchRate = (exchbMacPriceUK - PPP) / PPP;

const finalAnswer = (exchRate * 100).toFixed();
// In 2021 if the pound is overvalued
// prompt(<select>(bMacBasePriceUS: exchbMacPriceILS) </select>);

// let exchRate = percentage (bMacBasePriceUS / bMacPriceUK);

console.log(finalAnswer + "%");

// function percentage(bMacBasePriceUS, bMacPriceUK) {
//   return (100 * bMacPriceUK) / bMacBasePriceUS;
// }

// console.log(percentage);