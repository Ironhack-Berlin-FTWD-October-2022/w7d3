function SearchField(props) {
    const handleInputChange = event => {
		props.setQueryProp(event.target.value)
	}

	return (
		<input type="text" onChange={handleInputChange} />
	)
}

export default SearchField