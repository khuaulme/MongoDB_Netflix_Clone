const plotWithHighlights = buildPlotHighlights(movie.highlights);

function buildPlotHighlights(highlights){

  let highlightString="";

  highlights.forEach(highlight =>{
  
  let texts= highlight.texts;
    texts.forEach(text =>{
      if (text.type === 'hit')
        highlightString += `<span style="color:red"> ${text.value} </span>`
      else highlightString += text.value
    });
  });

  return highlightString;
} 
