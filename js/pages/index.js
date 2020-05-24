$( window.document ).ready(function() {

	$(window.document).on('click', 'section.number-wrraper #add', function (oEvent) {
		
		var oStore = {
			type: 'ADD_NUMBER',
			payload: {}
		};
		
	 	store.dispatch(oStore);

	});


	$(window.document).on('click', 'section.number-wrraper #sub', function (oEvent) {
		
		var oStore = {
			type: 'SUB_NUMBER',
			payload: {}
		};
		
	 	store.dispatch(oStore);

	});

	$(window.document).on('click', 'section.number-wrraper #init', function (oEvent) {
		
		var oStore = {
			type: 'INIT_NUMBER',
			payload: {}
		};
		
	 	store.dispatch(oStore);

	});


	store.subscribe(function() {

		var oState = store.getState();
        var iNumber = oState.number;
        var sNumberComponent = iNumber;
	 	$('section.number-wrraper #number').html(sNumberComponent);
	});


});