export let movieList = null;
export let inputSearch = -null;
export let triggerMode = false;

export const createStyle = () => {
  const headStyle = document.createElement('style');

  headStyle.innerHTML = `
  * {
  box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Verdana, Tahoma, sans-serif;
    background-color: #212127;
    color: #ddd3d3;
  }
  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    text-align: center;
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
    flex-direction: column;
    align-items: center;
  }
  .movie__image {
    width: 100%;
    object-fit: cover;
  }
  .search {
    margin-bottom: 30px;
  }
  .search-block__input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .search__label-input {
    display: block;
    margin-bottom: 7px;
  }
  .search__input {
    padding: 10px 15px;
    width: 400px;
    display: block;
    border: 2px solid rgb(68, 68, 68);
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .search__input:focus {
    outline: none;
    border-color: #000000;
  }
  .search-block__checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .search__checkbox{
    width: 15px;
    height: 15px;
  }
  .search__label-checkbox {
    font-size: 14px;
    display: block;
  }
    `;

  document.head.append(headStyle);
}

const createElement = ({
  type,
  attrs,
  container = null,
  position = 'append',
  evt = null,
  handler = null
}) => {
  const el = document.createElement(type);

  for (let key in attrs) {
    if (key !== 'innerText')
      el.setAttribute(key, attrs[key]);
    else {
      el.innerHTML = attrs[key];
    }
  }

  if (evt && handler) el.addEventListener(evt, handler);
  if (container && position === 'append') container.append(el);
  if (container && position === 'prepend') container.prepend(el);

  return el;
};

export const createMarkup = () => {
  const container = createElement({
    type: 'div',
    attrs: { class: 'container' },
    container: document.body,
    position: 'prepend'
  });

  createElement({
    type: 'h1',
    attrs: { innerText: 'Приложение для поиска фильмов' },
    container
  });

  const searchBox = createElement({
    type: 'div',
    attrs: { class: 'search' },
    container
  });

  const inputBlock = createElement({
    type: 'div',
    attrs: {
      class: 'search-block__input'
    },
    container: searchBox
  })

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label-input',
      for: 'search',
      innerText: 'Поиск фильмов'
    },
    container: inputBlock
  });

  inputSearch = createElement({
    type: 'input',
    attrs: {
      class: 'search__input',
      id: 'search',
      placeholder: 'Начните вводить текст...',
      type: 'text'
    },
    container: inputBlock
  });

  const checkboxBlock = createElement({
    type: 'div',
    attrs: {
      class: 'search-block__checkbox'
    },
    container: searchBox
  })

  createElement({
    type: 'input',
    attrs: {
      class: 'search__checkbox',
      id: 'checkbox',
      type: 'checkbox'
    },
    container: checkboxBlock,
    evt: 'click',
    handler: () => triggerMode = !triggerMode
  });

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label-checkbox',
      for: 'checkbox',
      innerText: 'Добавлять фильмы к существующему списку'
    },
    container: checkboxBlock
  });

  movieList = createElement({
    type: 'div',
    attrs: {
      class: 'movies'
    },
    container
  });
};

export const clearMoviesMarkup = (el) => el && (el.innerHTML = '');

export const addMovieToList = (movie) => {
  const item = createElement({
    type: 'div',
    attrs: {
      class: 'movie'
    },
    container: movieList
  });

  createElement({
    type: 'img',
    attrs: {
      class: 'movie__image',
      src: /^(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'assets/img/no-image.jpg'
    },
    container: item
  });

  createElement({
    type: 'h3',
    attrs: {
      class: 'movie__title',
      innerText: movie.Title
    },
    container: item,
  })

  createElement({
    type: 'span',
    attrs: {
      class: 'movie__year',
      innerText: movie.Year
    },
    container: item
  })
};