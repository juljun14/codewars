function reverseIt(data){
  if (typeof data == 'string') {
    return ("" + data).split("").reverse().join("");
  } else if (typeof data == 'number') {
    return parseFloat(("" + data).split("").reverse().join(""));
  } else {
    return data;
  }
 }

// function reverseIt(data){
//   if(typeof data === 'string'){
//     return data.split("").reverse().join("");
//   }
//   if(typeof data === 'number'){
//     var a = +(data.toString().split("").reverse().join(""));
//     return a;
//   }
//   return data;
// }