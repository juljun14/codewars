function countSheeps(arrayOfSheeps) {
  total = 0;
  
  for (i = 0; i < arrayOfSheeps.length; i++) {
    if (arrayOfSheeps[i] === true) {
      total++;
    }
  }
  return total;
}