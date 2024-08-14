import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fb7aa144196040bea77899c0541936e5',
    },
});
