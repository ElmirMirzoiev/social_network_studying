import {baseURL} from "./baseURL";


export const ProfileAPI = {
    getProfileData(userId) {
        return baseURL.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    }
}