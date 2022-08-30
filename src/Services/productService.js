import axios from "../axios";

class ProductService {

    productPost = async (data) =>{
        console.log(data)
        const promise = new Promise((resolve, reject) =>{
            axios.post('products',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }


    fetchCategory = async () =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('products/categories')
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }
}

export default new ProductService();