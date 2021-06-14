exports = function(payload) {
  
  const searchTerm = payload.query.arg;

  // Querying a mongodb service:
  const movies = context.services.get("mongodb-atlas")
    .db("sample_mflix").collection("movies");
    
  searchQuery = [
    {
      '$search': {
        'text': {
          'query': searchTerm, 
          'path': [
            'plot', 'fullplot', 'title'
          ], 
          'fuzzy': {}
        }
      }
    }, {
      '$project': {
        'title': 1, 
        'year': 1, 
        'poster': 1, 
        'plot': 1, 
        'score': {
          '$meta': 'searchScore'
        }
      }
    }, {
      '$limit': 12
    }
  ];

  return  movies.aggregate(searchQuery).toArray();
};

