exports = function(payload) {
    
    const searchTerm = payload.query.arg;
    
  // Querying a mongodb service:
  const movies = context.services.get("mongodb-atlas")
    .db("sample_mflix").collection("movies");
    
    
    let searchQueryTitles = [
      {
        '$search': {
          'index': 'autocomplete', 
          'autocomplete': {
            'query': searchTerm, 
            'path': 'title'
          }
        }
      }, {
        '$project': {
          'title': 1, 
          '_id': 0
        }
      }, {
        '$limit': 10
      }
    ];

  return  movies.aggregate(searchQueryTitles).toArray();
};