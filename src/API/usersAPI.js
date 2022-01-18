import {baseURL} from "./baseURL";


export const UsersAPI = {
    getUsersData(currentPage = 1, pageSize = 21) {

        return baseURL.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    getFriendsData() {
        return baseURL.get(`users?count=100&friend=true`)
            .then(response => {
                return response.data
            });
    },
    followUser(userId) {
        return baseURL.post(`follow/${userId}`)
            .then(response => {
                return response
            });
    },
    unfollowUser(userId) {
        return baseURL.delete(`follow/${userId}`)
            .then(response => {
                return response
            });
    }
}

