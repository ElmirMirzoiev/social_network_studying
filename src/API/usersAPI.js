import {axiosInstance} from "./aixosInstace";


export const UsersAPI = {
    getUsersData(currentPage = 1, pageSize = 20) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}