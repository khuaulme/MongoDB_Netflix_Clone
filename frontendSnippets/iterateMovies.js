movies.forEach(movie =>{
      const title = movie.title;
      const plot = movie.plot;
      const poster = movie.poster;
      const year = movie.year;
      const score = movie.score;

      text += ` 
        <div class="column">
            <div class="MovieCard">
                <img class="img-poster" src=${poster} alt="poster" width="200">  
                <b><h3>${title}</h3></b>
                <h5><span class="color-gray">Score:</span> ${score} </h5>
                <h5><span class="color-gray">Year:</span> ${year}</h5>
                <p>${plot}</p>         
            </div>
        </div>
      `;
  }); 
