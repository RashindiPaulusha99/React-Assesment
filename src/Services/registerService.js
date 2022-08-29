import axios from "../axios";

class RegisterService {

    registerPost = async (data) =>{
        console.log(data)
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


    fetchPost = async () =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('users')
                .then((res) =>{
                    console.log(resolve(res))
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        console.log(promise)
        return await promise
    }
}

export default new RegisterService();