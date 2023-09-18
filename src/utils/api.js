import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmEyMmVlZTMxZWEwYTIwYmE2YWUzNzA5ODIzNWIwNCIsInN1YiI6IjY0ZjZkMGEyYjIzNGI5MDBjNmIxZWVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4g-RDZQTT_e-r68gWpr-MNEuDQlM5S_ndmFfX1D-Gr8",
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};