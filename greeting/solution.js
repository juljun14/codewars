function Person(yourName){
  this.name  = yourName;
  this.greet = function(yourName){
  	return "Hello " + yourName + ", my name is " + this.name;
	}
}