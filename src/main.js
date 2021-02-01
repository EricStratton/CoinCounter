
// price = 4.99
// if (num < 0.25) {
  //   num - 0.25;

// funciton{
//   const quater = .25;
//   const counter1 = 0;
//   if(num < (quater * counter)){
//     return nextFunction(num - (quater*counter))
//   } else {
//     function(counter+=1);
//   }
// }

export const quarterCounter = (price, quarters) => {
  const value = 0.25;
  if (isNaN(quarters)) { // terminal case
    return;
  }                     
  if (price < value) { // base case
    return quarters;
  } else {
    return quarterCounter(price - value, quarters + 1);
  }
}


export const coinCounter = (price, coins, value) => {
  if (isNaN(coins)) { // terminal case
    return;
  }                     
  if (price < value) { // base case
    return coins;
  } else {
    return coinCounter(price - value, coins + 1, value);
  }
}


export const calcCoins = (price) => {

const quarters = coinCounter(price, 0, 0.25);
const dimes = coinCounter(price%.25, 0, .10);
const nickles = coinCounter((price%.25)%.10, 0, .05);
const pennies = coinCounter(((price%.25)%.10)%.05, 0, .01);

return `Change would be ${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies.`
}


// // price - (quarters * value)


// export const coinCounter = (price, coin, value) => {
//   if (isNaN(quarters)) { // terminal case
//     return;
//   }                     
//   if (price < value) { // base case
//     return coinCounter;
//   } else {
//     return coinCounter(price - value, quarters + 1);
//   }
// }

// // const quarterCounter = coinCounter (0.25)
// // quarterCounter (price, coin)

// const coinCounter = (price, value) => {
//   return (coins) => {
//     if (isNaN(coins)) { // terminal case
//       return;
//     }                     
//     if (price < value) { // base case
//       return coinCounter;
//     } else {
//       return coinCounter(price - value, coins + 1);
//     }
//   }
// }

// const quarterCounter = coinCounter(4.99, 0.25)
// const dimeCounter = coinCounter(0.10)

// const firstFunc = (price) => {
//   coinCounter(price, .25)(price, .10)(price, .05)(price, .01)
// }


// if(price >= .25){
//   coinCounter(price, .25)
// } else if(price < .25 && price > .10){
//   cointCounter(price, .10) {
//   } 
// }