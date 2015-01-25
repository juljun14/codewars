// function extractIds(data){

// }

data = {
    id: 1,
    items: [{
        id: 2,
        items: [{
              id: 3,
              items: [
                {id: 4},
                {id: 5}
              ]
            },{
              id: 6,
              items: [{id: 7}]
            }]
      }]
}

var answer = [];
var adapt  = data;

function initialCheck() {
	if (!!adapt.id) {
		answer.push(adapt.id);
	}
}

function captureId() {
	if (!!adapt.id) {
		answer.push(adapt.id);
		console.log("Pushing: " + adapt.id)
	}
}

function ItemChecker() {
	if (!!adapt.items) {
		LengthOfObjectTimesDo();
	}
}

function LengthOfObjectTimesDo() {
	var counter = adapt.items.length
	for (i = 0; i < counter; i++) {
		console.log("Before : " + adapt)
		adapt = adapt.items[i]
		console.log("Now   : " + adapt)
		captureId();
	}
}

initialCheck();
console.log(adapt)
ItemChecker();
ItemChecker();
console.log(adapt)
console.log(answer)
