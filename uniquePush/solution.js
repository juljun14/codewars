//only push obj onto arr if it has a unique phoneNumber
function uniquePush(arr, obj) {
  if (arr.length === 0) {
    arr.push(obj);
    return true;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].phoneNumber === obj.phoneNumber || obj.phoneNumber === undefined) {
        return false;
      } // if
    } // for
  } // else
  arr.push(obj);
  return true;
} // function

var nameArr = [];

var bob = {name:'bob', phoneNumber:1234}
var joe = {name:'joe', phoneNumber:12345};
var dupeJoe = {name:'I am duped', phoneNumber:12345};
var badName = {name:'bad'}

uniquePush(nameArr, bob);
uniquePush(nameArr, joe);
uniquePush(nameArr, dupeJoe);
uniquePush(nameArr, badName);

console.log(nameArr);