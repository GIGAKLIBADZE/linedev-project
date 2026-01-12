import type { IAuthResponse, ILoginPayload } from "./types";
import { axiosInstance } from "../api/request";

export const login = async (data: ILoginPayload) => {
    const response = await axiosInstance.post<IAuthResponse>('/iam/auth/login', data);
    return response.data;
}

export const register = async (data: ILoginPayload) => {
    const response = await axiosInstance.post<IAuthResponse>('iam/auth/register', data);
    return response.data;
}