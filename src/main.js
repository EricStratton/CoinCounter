
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