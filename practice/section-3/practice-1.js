  var SYMBOL_START_POS = 2;

  function create_updated_collection(collection_a, object_b) {
    var result = [],special_array = [];

    result = count_same_elements(collection_a);
    special_array = find_special_array(result, object_b);

    result.forEach(function(val) {
      if(special_array.indexOf(val.key) > -1) {val.count -= 1;}
    });

    return result;
  }

  function count_same_elements(collection) {
    var result = [];

    collection.forEach(function(item){
      var exist_items = result.filter(function(val){
        return item.key === val.key;
      });

      if(exist_items.length === 0) {result.push(item);}
      else {exist_items[0].count += item.count;}
    });

    return result;
  }

  function find_special_array(collection, object) {
    var special_array = [];

    collection.forEach(function(val) {
      if(object.value.indexOf(val.key) > -1) {special_array.push(val.key);}
    });

    return special_array;
  }
