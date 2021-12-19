import { UserActonsTypes } from "./user.types";


export const setCurrentUser = user => ({
    type: UserActonsTypes.SET_CURRENT_USER,
    payload: user
});