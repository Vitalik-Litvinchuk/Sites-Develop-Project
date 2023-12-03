import { Dispatch } from "react";
import { AuthAction, AuthActionTypes, IUserToken } from "./types";
import jwt from "jwt-decode";

export const UserFromToken = (token: string, dispatch: Dispatch<AuthAction>) => {
    const user = jwt(token) as IUserToken;
    let currentDate = new Date();
    if (!(user.exp * 1000 < currentDate.getTime())) {
        dispatch({
            type: AuthActionTypes.Token,
            user: { id: user.id, email: user.email, name: user.name, roles: user.roles }
        });
    }
}