function cookingTime(eggs) {
	switch(eggs) {
    case eggs === 0:
        return 0;
        break;
    case eggs > 0 && eggs <= 8:
        return 5;
        break;
    default:
        if (eggs % 8 === 0) {
        	return eggs / 8 * 5
        } else {
        	return Math.floor(eggs / 8 + 1) * 5 
        }
}
}

// cook time for 0 eggs
console.log(cookingTime(0) === 0)
// cook time for 2 eggs
console.log(cookingTime(2) === 5)
// cook time for 5 eggs
console.log(cookingTime(5) === 5)
// cook time for 8 eggs
console.log(cookingTime(8) === 5)
// cook time for 15 eggs
console.log(cookingTime(15) === 10)
// cook time for 16 eggs
console.log(cookingTime(16) === 10)
// cook time for 20 eggs
console.log(cookingTime(20) === 15)