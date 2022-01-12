import {axiosInstance} from "./aixosInstace";


export const ProfileAPI = {
    getProfileData(userId = 2) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    }
}