var cNumberReducer = function(state = 0, actions) {

 switch (actions.type) {
	 case 'ADD':
	 	state = state + 1;
	 	break;
	 case 'SUB':
	 	state = state - 1;
	 	break;
	 default:
	 	state = state;
	 	break;
	 }
 	return state;
 }

 var cReducer = Redux.combineReducers({
  	number: cNumberReducer,
  		
});
