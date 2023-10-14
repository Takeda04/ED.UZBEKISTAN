import { IUser } from "../context/AppContextProvider";



export interface ILoginResponse {
    access_token: string;
    refresh_token: string;
}

export interface IUserResponse {
    success: false,
    errors: {
        field: string;
        message: string;
        code: string;
    }[];
    data: IUser;
}