function Search(id, tableau) {
    return tableau.find(item => item.id === id);
}

export default Search;