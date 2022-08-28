import axios from "../axios";

class PostService {

    createPost = async (data) =>{
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

export default new PostService();



