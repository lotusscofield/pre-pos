function collect_same_elements(collection_a, object_b) {

  var collection_c = collection_a.map(function(val) {
    return val.key;
	});

  return collection_c.filter(function(item) {
    return(object_b.value.indexOf(item) !== -1) ;
    }) ;
}
