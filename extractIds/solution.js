function extractIds(data){
  return [].concat.apply([], Object.keys(data).map(function(item) {
    return item === 'id' ? data[item] : extractIds(data[item]);
  }));
}