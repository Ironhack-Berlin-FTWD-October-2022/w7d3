// Conditional rendering
function MoviesList(props) {
	return (
		props.movies.map(movie => (
			<div key={movie._id}>
				<h3>{movie.title}</h3>
				<h5>Directed by: {movie.director}</h5>

				{/* If IMDB rating is higher than 9 display "Recommended!" */}
				{movie.IMDBRating > 9 && <h5>Recommended! 😍</h5>}

				{/* If movie has oscars display "Oscar Winner!", else display "No Oscar" */}
				{movie.hasOscars ? <h5>Oscar Winner! 🏆</h5> : <h5>No Oscar ☹️</h5>}

				<button onClick={() => {props.deleteMovie(movie._id)}}>Delete movie</button>
			</div>
		))
	)
}

export default MoviesList