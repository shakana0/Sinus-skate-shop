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
}
export async function getOrders(){
    return await axios.get('/orders/')
}
