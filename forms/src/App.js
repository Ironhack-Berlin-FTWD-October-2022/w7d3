import "./App.css"
import { useState } from "react"
import MoviesList from "./MoviesList"
// We install this package: https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid"
import AddMovie from "./AddMovie"

const moviesData = [
    {
        _id: "1ae23ef1",
        title: "The Godfather",
        director: "Francis Coppola",
        hasOscars: true,
        IMDBRating: 9.2,
    },
    {
        _id: "1ae23ef2",
        title: "Star Wars",
        director: "George Lucas",
        hasOscars: true,
        IMDBRating: 8.7,
    },
    {
        _id: "1ae23ef3",
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        hasOscars: false,
        IMDBRating: 9.3,
    },
    {
        _id: "1ae23ef4",
        title: "Jurassic Park",
        director: "Steven Spielberg",
        hasOscars: false,
        IMDBRating: 8.0,
    },
    {
        _id: "1ae23ef5",
        title: "Sharknado",
        director: "Anthony C. Ferrante",
        hasOscars: false,
        IMDBRating: 5.2,
    },
    {
        _id: "1ae23ef6",
        title: "Titanic",
        director: "James Cameron",
        hasOscars: true,
        IMDBRating: 8.9,
    },
]

function App() {
    const [movies, setMovies] = useState(moviesData)

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
        setMovies([newMovie, ...movies])

        // Reset input fields
        setTitle("")
        setDirector("")
        setRating(0)
        setHasOscars(false)
    }

    const deleteMovie = (id) => {
        const filteredMovies = movies.filter(movie => {
            return movie._id !== id
        })

        setMovies(filteredMovies)
    }

    return (
        <div className="App">
            {/* The React form does not have an action attribute nor a method */}
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

            {/* We could extract our form into an AddMovies-component: */}
            {/* <AddMovie movies={movies} setMovies={setMovies}/> */}

            <MoviesList movies={movies} deleteMovie={deleteMovie} />
        </div>
    )
}

export default App
