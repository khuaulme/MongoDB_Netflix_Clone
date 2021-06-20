async function searchMovies() {

      let text = "";

      let searchTerm = search.value;
      const webhook = "";

      const url = webhook +"?arg=" + searchTerm;

      try{   
        const movies = await fetch(url)
          .then(res =>res.json());
      
        console.log(movies);

        resultDisplay.innerHTML = text;     
            
      } catch (error) {
      console.log("Whoopsie!", error);
      }

}
