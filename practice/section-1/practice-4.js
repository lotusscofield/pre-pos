function collect_same_elements(collection_a, object_b) {

  var collection_c = [] ;

  for (var i = 0; i < collection_a.length; i++) {
    collection_c.push(collection_a[i].key);
	}

  return object_b.value.filter(function(item) {
    return(collection_c.indexOf(item) !== -1) ;
    }) ;
  }

}

