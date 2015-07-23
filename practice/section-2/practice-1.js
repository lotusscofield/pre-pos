function count_same_elements(collection) {
  var result = [];
  var temp = collection.map(function(val){
    return {key: val, count: 1} ;
  });

  temp.forEach(function(item) {
    var exist_item = result.filter(function(val){
      return(item.key === val.key);
    });

    if(exist_item.length === 0) {result.push(item);}
    else {exist_item[0].count += item.count;}
  }) ;

  return result;
}
