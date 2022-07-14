import { useState, useEffect } from "react"
import { apiFetch } from '../services/Constants';
import GifSearch from "./GifSearch";


function GifContainer(){

    const [gifs, setGifs] = useState([])
    const [searchTerm, setSearchTerm] = useState('default')

    async function handleSearch(event) {
        event.preventDefault();
        setSearchTerm(event.target.value)
        const response = await apiFetch(searchTerm)
        console.log('Response',response)
        setGifs(response.map((data) => {
            return data.images.fixed_height.url
        }))
        console.log('Gifs',gifs)
    }



    return(
        <div>
             <GifSearch onChange={(e) => handleSearch(e)} />
             <div>
                {
                    gifs.map((url, index) => {
                        return <img src={url} alt='' key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default GifContainer