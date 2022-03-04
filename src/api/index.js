import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api';

 export function saveToken(token){
     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
export async function getItems(category){
    // return await axios.get('/items?page=`${2}`');
    return await axios.get(`/items?category=${category}`);
}

export async function regiserUser(userRegistrationData){
    return await axios.post('/register/', userRegistrationData)
        .then((response) => {  
            return response.status
            
        })
        .catch((error) => {
            if (error.response) {
                return error.response.status  
            }
        });
}
export async function loginUser(loginData){
    return await axios.post('/auth/', loginData)
        .catch(function (error) {
            if (error.response) {
                // console.log(error.response.data);
                return error.response.status
                // console.log(error.response.headers);
            }
        });
}

export async function getUser(){
    return await axios.get('/me/');
}

export async function addOrder(order){
    return await axios.post('/orders/', order)
    .then((response) => {  
        return response.status  
    })
    .catch((error) => {
        if (error.response) {
            return error.response.status  
        }
    });
}
export async function getOrders(){
    return await axios.get('/orders/')
}
//admin sida

export async function getProductById(id){
    return await axios.get(`/items/${id}`);
}
export async function updateProductById(productInfo, id){
    await axios.patch(`/items/${id}`,productInfo);
}
export async function deleteProduct(id){
    await axios.delete(`/items/${id}`);
}
export async function addImage(formData){
    await axios.post(`/images`, formData).catch(console.log("error"));
}

export async function addProduct(productData){
    return await axios.post(`/items/`,productData);
}
export async function updateOrder(orderState){
    return await axios.patch(`/orders/${orderState.id}`, {status: orderState.status});
}
