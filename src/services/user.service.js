import axios from "axios";
import authHeader from "./auth-header";
const API_URL = 'https://reqres.in/api/'

class UserService {
    getPublicContent(){
        return axios.get(API_URL+'user');
    }
}
export default new UserService();