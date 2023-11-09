import axios from "axios";

export default axios.create({
    //return our axios instance
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 56YzV7sdVDZrU2kOBPJlOyjVUlxvvAuVq0TNgF-oQVJCj5RKhgVXr4s3-iuArY_m698a8Re3xsDoUAVs8gozo8ghQY1_ajOZJRGiSi_Iaxzcw023Xxm2UZ9xvkAxZXYx"
    }
});