var cNumberReducer = function(iState = 0, oAction) {

 switch (oAction.type) {
	 case 'ADD_NUMBER':
	 	iState = iState + 1;
	 	break;
	 case 'SUB_NUMBER':
	 	iState = iState - 1;
	 	break;
	 case 'INIT_NUMBER':
	 	iState = 0;
	 default:
	 	iState = iState;
	 	break;
	 }
 	return iState;
 }

 var cReducer = Redux.combineReducers({
  	number: cNumberReducer,
  		
});
