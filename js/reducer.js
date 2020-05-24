var cNumberReducer = function(iNumber = 0, oAction) {
	var _iNumber;
 switch (oAction.type) {
	 case 'ADD_NUMBER':
		_iNumber = iNumber + 1;
	 	break;
	 case 'SUB_NUMBER':
		_iNumber = iNumber - 1;
	 	break;
	 case 'INIT_NUMBER':
		_iNumber = 0;
		break;
		// 不要忘记写了 break, 永远跑了 defualt;
		// 不要忘记写了 break, 永远跑了 defualt;
		// 不要忘记写了 break, 永远跑了 defualt;
		// 不要忘记写了 break, 永远跑了 defualt;
		// 不要忘记写了 break, 永远跑了 defualt;
		// 不要忘记写了 break, 永远跑了 defualt;
		// 不要忘记写了 break, 永远跑了 defualt;
		// 不要忘记写了 break, 永远跑了 defualt;

		default:
		_iNumber = iNumber;
	 	break;
	 }
 	return _iNumber;
 }

 var cUsersReducer = function(aUsers = [], oAction) {
	var _aUsers = [];
	// _aUsers , 最后决定的 users 资料
	// aUsers. AJAX 事件发生前 users 原本状态的资料
	// oAction.payload AJAX 事件发生后 从服务器来的 users 资料
	switch (oAction.type) {
		case 'GET_USERS':
			  // 4. reducer 根据 3 来的数据 与 type 来使用不同的 reducer 做 数据处理（插入排序 改字段 等）
			_aUsers = oAction.payload;
			break;
		case 'POST_USERS':
			// 如果需要， 在这里做 资料的排序！！
			_aUsers = aUsers.concat(oAction.payload);
			break;
		case 'PUT_USERS':
			var __aUsers = oAction.payload;
			var __oUser = __aUsers.pop();
			for (var iIndex = 0; iIndex < aUsers.length; iIndex++) {
				if(aUsers[iIndex].user_id == __oUser.user_id) {
					
					aUsers[iIndex] = Object.assign(aUsers[iIndex], __oUser);
					break;
				}
			}
			_aUsers = aUsers;
			return _aUsers;

		case 'DELETE_USERS':
			var __aUsers = oAction.payload;
			var __oUser = __aUsers.pop();
			var _iIndex;
			for (var iIndex = 0; iIndex < aUsers.length; iIndex++) {
				if(aUsers[iIndex].user_id == __oUser.user_id) {
					_iIndex = iIndex;
					break;
				}
			}
			if (_iIndex >= 0 && _iIndex + 1 <= aUsers.length) {
				_aUsers = aUsers.slice(0, _iIndex).concat(aUsers.slice(_iIndex + 1, aUsers.length));
				
			}

			if (_iIndex >= 0 && _iIndex == aUsers.length) {
				_aUsers = aUsers.slice(0, _iIndex);
			}
			return _aUsers;
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
