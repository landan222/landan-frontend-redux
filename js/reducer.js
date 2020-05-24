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

 var cUsersReducer = function(aUsers = [], oAction) {
	var _aUsers = [];
	switch (oAction.type) {
		case 'GET_USERS':
			_aUsers = aUsers;
			break;
		case 'POST_USERS':
			_aUsers = aUsers - 1;
			break;
		case 'PUT_USERS':
			_aUsers;
		case 'DELETE_USERS':
			_aUsers;
		default:
			_aUsers = aUsers;
			break;
		}
		return _aUsers;
	}

 var cReducer = Redux.combineReducers({
  	number: cNumberReducer,
  	users: cUsersReducer
});
