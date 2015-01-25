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
var beforeKick;

function initializer() {
  if (!!data.id) {
    answer.push(data.id)
  }
  if (!!data.items) {
    data = data.items
  }
}

function inception() {
  for (var levels in data) {
    if (!!data[levels].id) {
      answer.push(data[levels].id);
    }
    if (!!data[levels].items && levels == 0) {
      beforeKick = data;
      data = data[levels].items;
      inception();
    } else if (!!beforeKick[levels].items && levels == 1) {
      answer.push(beforeKick[levels].id)
      data = beforeKick[levels].items;
      inception();
    } else {
      break;
    }
  }
}

initializer();
inception();

console.log(answer)