let movieList = null;

const createStyle = () => {
  const headStyle = document.createElement('style');

  headStyle.innerHTML = `
  * {
  box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  .wrapper {
    padding: 20px;
  }
  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .movie {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .movie__image {
    width: 100%;
    object-fit: cover;
  }
    `;

  document.head.append(headStyle);
}

const createMarkup = () => {
  const movieWrapper = document.createElement('div');
  movieWrapper.classList.add('wrapper');

  const movies = document.createElement('div');
  movies.classList.add('movies');
  movieWrapper.append(movies);

  document.body.append(movieWrapper);

  movieList = document.querySelector('.movies');
}

const addMovieToList = (movie) => {
  const item = document.createElement('div');
  const img = document.createElement('img');

  item.classList.add('movie')

  img.src = movie.Poster;
  img.classList.add('movie__image')
  item.append(img);
  movieList.append(item);
}

createMarkup();
createStyle();