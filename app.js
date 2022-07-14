const autoCompleteConfig = {
    renderOption(movie) {
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
        <img src="${imgSrc}"/>
        ${movie.Title} (${movie.Year})
        `;
    },
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie);
    },
    inputValue(movie) {
        return movie.Title;
    },
    async fetchData(searchTerm) {
        const response = await axios.get('http://www.omdbapi.com/',
            {
                params: {
                    apikey: 'c964f021',
                    s: searchTerm
                }
            }
        );
        if (response.data.Error) {
            return [];
        }

        return response.data.Search;
    }
}


createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('#left-autocomplete')
  
});
createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('#right-autocomplete')
  
});


const onMovieSelect = async (movie) => {
    const response = await axios.get('http://www.omdbapi.com/',
        {
            params: {
                apikey: 'c964f021',
                i: movie.imdbID
            }
        });

    document.querySelector('#summary').innerHTML = movieTemplate(response.data)
};

const movieTemplate = (movieDetail) => {
    return `
    <article class="media">
    <figure class="media-left">
        <p class="image">
            <img src="${movieDetail.Poster}"/>
        </p>
    </figure>
  
    <div class="media-content">
        <div class="content">
            <h1>${movieDetail.Title}</h1>
            <h4>${movieDetail.Genre}</h4>
            <p>${movieDetail.Plot}</p>
        </div>
    </div>
  </article>
        <article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.Awards}</p>
                <p class="sub-title">Awards</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.BoxOffice}</p>
                <p class="sub-title">Box Office</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.Metascore}</p>
                <p class="sub-title">Metascore</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.imdbRating}</p>
                <p class="sub-title">IMDB Rating</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.imdbVotes}</p>
                <p class="sub-title">IMDB Votes</p>
            </article>  
    </article>
    `
};