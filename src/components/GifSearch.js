function GifSearch(props) {

    return(
        <div>
            <label htmlFor="gif-search"></label>
            <input type='text' value={props.value} onChange={props.onChange} name='gif-search'/>
            <button onClick={props.onClick}>Search</button>
        </div>
    )
}

export default GifSearch