import axios from 'axios';

const instaince = axios.create({
    baseURL: 'https://tinder-colon.herokuapp.com'
})


export default instaince;
