var cNumberReducer = function(state = 0, actions) {

 switch (actions.type) {
	 case 'ADD_NUMBER':
	 	state = state + 1;
	 	break;
	 case 'SUB_NUMBER':
	 	state = state - 1;
	 	break;
	 case 'INIT_NUMBER':
	 	state = 0;
	 default:
	 	state = state;
	 	break;
	 }
 	return state;
 }

 var cReducer = Redux.combineReducers({
  	number: cNumberReducer,
  		
});
