import {baseURL} from "./baseURL";


export const UsersAPI = {
    getUsersData(currentPage = 1, pageSize = 20) {
        return baseURL.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}