$( window.document ).ready(function() {

	$('#add').click(function() {
		var oStore = {
			type: 'ADD',
			payload: 0
		};
		
	 	store.dispatch(oStore);
	});

	$('#sub').click(function() {
		var oStore = {
			type: 'SUB',
			payload: 0
		};
		
	 	store.dispatch(oStore);
	});


	store.subscribe(function() {

		debugger;
		var oState = store.getState();
        var iNumber = oState.number;
        var sComponent = iNumber;
	 	$('#number').html(sComponent);
	});


});