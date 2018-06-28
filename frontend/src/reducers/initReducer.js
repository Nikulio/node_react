import * as consts from "../actions/consts"

export function initReducer(state = {}, action) {
	switch (action.type) {
		case consts.INIT_ACTION:
			return action.payload;
		default:
			return state;
	}
}
