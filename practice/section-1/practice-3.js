function collect_same_elements(collection_a, object_b) {
 	return collection_a.filter(function(item) {
		return(object_b.value.indexOf(item) !== -1)	
	}) 
}
