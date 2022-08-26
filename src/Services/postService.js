import axios from "axios";

class PostService {
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



