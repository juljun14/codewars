function calculate(n1, n2, o) {
	switch(o) {
    case "add":
	    (parseInt(n1, 2) + parseInt(n2, 2)).toString(2);
	    break;
    case "subtract":
      (parseInt(n1, 2) - parseInt(n2, 2)).toString(2);
      break;
    case "multiply":
      (parseInt(n1, 2) * parseInt(n2, 2)).toString(2);
      break;
    case "divid":
      (parseInt(n1, 2) / parseInt(n2, 2)).toString(2);
      break;
	}
}