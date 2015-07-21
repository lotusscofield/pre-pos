function collect_same_elements(collection_a, object_b) {

  var collection_a1 = [];
 	for (var i = 0; i < collection_a.length; i++) {
    	collection_a1.push(collection_a[i].key);
	}

	return collection_a1.filter(function(item) {
		 return(object_b.value.indexOf(item) !== -1);
     });
	}
}
