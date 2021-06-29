// const getData = (url) => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', url);

//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       const json = JSON.parse(xhr.response);
//       resolve(json.Search);
//     } else reject(xhr.statusText);
//   };

//   xhr.onerror = (err) => reject(err);

// });

const getData = (url) => fetch(url)
  .then(res => res.json())
  .then(json => json.Search);

const search = 'Iron man';
const search2 = 'Superman';
const search3 = 'Batman';

const ironman = getData(`http://www.omdbapi.com/?apikey=1d541a41&s=${search}`);
const superman = getData(`http://www.omdbapi.com/?apikey=1d541a41&s=${search2}`);
const batman = getData(`http://www.omdbapi.com/?apikey=1d541a41&s=${search3}`);

// ironman.then((movies) => movies.forEach(movie => addMovieToList(movie)));
// superman.then((movies) => movies.forEach(movie => addMovieToList(movie)));
// batman.then((movies) => movies.forEach(movie => addMovieToList(movie)));

// Promise
//   .all([ironman, superman, batman])
//   .then((res) => res.forEach((movies) => movies.forEach(movie => addMovieToList(movie))));

// getData(`http://www.omdbapi.com/?apikey=1d541a41&s=${search}`)
// .then((movies) => movies.forEach(movie => console.log(movie)));