function fillMovieTitle(movieTitle){
    
    search.value = movieTitle;    // fill the searchbar with selected title
    autoDisplay.innerHTML='';     
    searchMovies("title");        // call the searchMovies function
}
