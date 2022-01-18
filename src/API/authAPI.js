import {baseURL} from "./baseURL";


export const authAPI = {
    getAuthData() {
        return baseURL.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }
}