import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function AddMovie(props) {
    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [rating, setRating] = useState(0)
    const [hasOscars, setHasOscars] = useState(false)

    const handleTitleChange = event => {
        // Function called
        console.log("Title changed")

        // Get input field value
        console.log(event.target.value)

        // Set title
        setTitle(event.target.value)
    }

    const handleDirectorChange = event => {
        setDirector(event.target.value)
    }

    const handleRatingChange = event => {
        setRating(event.target.value)
    }

    const handleHasOscarsChange = event => {
        setHasOscars(event.target.checked)
    }

    const handleSubmit = event => {
        // Prevent the site from being refreshed
        event.preventDefault()

        console.log(title, director, rating, hasOscars)

        // Create a new movie based on the state values
        const newMovie = {
            _id: uuidv4(),
            title,
            director,
            rating,
            hasOscars
        }

        console.log(newMovie)

        // Add new movie to movies list
        props.setMovies([newMovie, ...props.movies])

        // Reset input fields
        setTitle("")
        setDirector("")
        setRating(0)
        setHasOscars(false)
    }

    // The React form does not have an action attribute nor a method
    return (
            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Title: </label>
                <input id="title" type="text" value={title} onChange={handleTitleChange} required />

                {/* You can also call setState directly in onChange
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} /> */}

                <label htmlFor="director">Director: </label>
                <input id="director" type="text" value={director} onChange={handleDirectorChange} required />

                <label htmlFor="rating">Rating: </label>
                <input id="rating" type="number" step="0.1" value={rating} onChange={handleRatingChange} />

                <label htmlFor="checkbox">Has Oscars: </label>
                <input id="checkbox" type="checkbox" checked={hasOscars} onChange={handleHasOscarsChange} />

                <button type="submit">Add movie</button>
            </form>
    )
}

export default AddMovie
