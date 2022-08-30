import axios from "../axios";

class LoginService {

    loginPost = async (data) =>{
        console.log(data)
        const promise = new Promise((resolve, reject) =>{
            axios.post('auth/login',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                    return resolve(error)
            })
        })
        return await promise
    }
}

export default new LoginService();



