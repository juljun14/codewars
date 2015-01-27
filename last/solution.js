function last(list){
  if (typeof list === "object" || typeof list === "string") {
  	return list[list.length - 1];
  } else {
  	return list;
  }
}