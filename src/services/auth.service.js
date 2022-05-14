import axios from "axios";
const API_URL = 'https://reqres.in/api/'

class AuthService {
    login(user) {
        return axios.past(API_URL+'login',{
            email: user.email,
            password: user.password
        })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('user',JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL+'register',{
            email: user.email,
            password: user.password
        });
    }
}
export default new AuthService();