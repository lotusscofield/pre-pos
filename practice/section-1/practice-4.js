function collect_same_elements(collection_a, object_b) {

  var collection_c = [] ;

  for (var i = 0; i < collection_a.length; i++) {
    collection_c.push(collection_a[i].key);
	}

  return collection_c.filter(function(item) {
    return(object_b.value.indexOf(item) !== -1) ;
    }) ;
  }

}
