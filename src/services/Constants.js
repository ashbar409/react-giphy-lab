import axios from "axios";

export async function apiFetch (searchTerm) {
    try {
        const response = (await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=FXAflM8ckbBssuwxj0L7Wymltq4xnOel&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`))
        console.log(response.data)
        return response.data.data
    } catch (e){
        console.log(e)
    }
}