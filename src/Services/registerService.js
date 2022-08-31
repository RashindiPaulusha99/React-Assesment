import axios from "../axios";

class RegisterService {

    registerPost = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('users',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }


    fetchUser = async () =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('users')
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                    return resolve(error)
            })
        })
        return await promise
    }
}

export default new RegisterService();