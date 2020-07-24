import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/';

export default axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
    },
});