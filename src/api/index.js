import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api';

// export function saveToken(token){
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   }
export async function getItems(category){
    // return await axios.get('/items?page=`${2}`');
    return await axios.get(`/items?category=${category}`);
}

export async function regiserUser(userRegistrationData){
    console.log(userRegistrationData);
    axios.post('/register/', userRegistrationData);
}
