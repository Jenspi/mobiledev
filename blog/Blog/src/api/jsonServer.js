import axios from 'axios'

export default axios.create({
    //our server
    baseURL: "https://fbc1-152-44-247-185.ngrok-free.app"
});