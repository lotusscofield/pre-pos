function collect_same_elements(collection_a, collection_b) {
	return collection_a.filter(function(item) {
		for (var i =0; i < collection_b.length; i++) { 
		return (collection_b[i].indexOf(item) !== -1)
		}
	})
}


		
