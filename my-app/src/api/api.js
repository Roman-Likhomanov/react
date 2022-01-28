import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5f4f6c5f-a1d2-4a3a-9c79-feb6ddbca618"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow (userId) {
        return instance.post(`follow/${userId}`,{})
    },
    
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile (userId) {
        console.warn("Obsolete method. Please profileAPI object.")
       return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    
    getProfile (userId) {
       return instance.get(`profile/${userId}`)
    },

    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus (status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me () {
    return instance.get(`auth/me`)
  }
}


  // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            //     withCredentials: true,
                            //     headers: {
                            //         "API-KEY": "5f4f6c5f-a1d2-4a3a-9c79-feb6ddbca618"
                            //     }
                            // })
                            // .then(response => {
                            //     if (response.data.resultCode === 0) {
                            //         props.unfollow(u.id)
                            //     } 
                            //     props.toggleFollowingProgress(false, u.id) 
                            // });



                               // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            //     withCredentials: true,
                            //     headers: {
                            //         "API-KEY": "5f4f6c5f-a1d2-4a3a-9c79-feb6ddbca618"
                            //     }
                            // })
                            //     .then(response => {
                            //         if (response.data.resultCode === 0) {
                            //             props.follow(u.id)
                            //         }
                            //         props.toggleFollowingProgress(false, u.id)
                            //     });







