  const poster = movie.poster ? movie.poster : "https://search-demos.s3.us-east-2.amazonaws.com/PosterNotFound.png";
  const year = Object.values(movie.year);
  const score = Object.values(movie.score).toString().slice(0, 5);
