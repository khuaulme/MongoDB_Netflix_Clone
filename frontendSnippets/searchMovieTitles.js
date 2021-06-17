search.addEventListener('input', searchMovieTitles);

async function searchMovieTitles() {
      
      resultDisplay.innerHTML = '';
      const searchTerm = search.value;
      const autocompleteURL ="";

      autoDisplay.innerHTML='';

      if (searchTerm.length < 4){
        return;
      } 

      try {
        const titles = await fetch(autocompleteURL+`?arg=${searchTerm}`)
          .then(res => res.json());
      
        console.log(titles);

      } catch (error){
        console.log("Whoopsie!", error);
      } 
      
    }

// ***********************
 if (titles.length >0){

    titles.map(title =>{
      let div = document.createElement('div');
      div.innerHTML=`<h2>${title.title}</h2><hr>`;
      div.addEventListener("click", ()=>fillMovieTitle(title.title));
      autoDisplay.appendChild(div);
    });      
  }
