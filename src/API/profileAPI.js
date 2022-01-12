import {axiosInstance} from "./aixosInstace";


export const ProfileAPI = {
    getProfileData(userID = 2) {
        return axiosInstance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            });
    }
}