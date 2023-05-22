// export const getMovies = (args) => {
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${id}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

export const getMovies = () => {
  return fetch(
    `/api/movies`
  ).then((res) => res.json());
};

export const getUpComingMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getTopRatedMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getPopularMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

// export const getMovie = (args) => {
//   // console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

export const getMovie = (args) => {
  const token = localStorage.getItem("token")
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}`, {
    headers: {
      'token': `${token}`
    },
    method: 'get'
  }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};


export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    import.meta.env.VITE_TMDB_KEY +
    "&language=en-US"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};
// export const getMovieReviews = (id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       // console.log(json.results);
//       return json.results;
//     });
// };

export const signup = (email, password, firstName, lastName) => {
  return fetch('/api/accounts', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName })
  }).then(res => res.json())
};

export const login = (email, password) => {
  return fetch('/api/accounts/security/token', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ email: email, password: password })
  }).then(res => res.json())
};

export const getIdWithToken = () => {
  const token = localStorage.getItem("token");
  return fetch(
    '/api/accounts/getId', {
    headers: {
      'token': `${token}`
    },
    method: 'get'
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error;
  });
};

export const addToFavorites = async (movieId, userId) => {
  const body = {
    movieId: movieId
  };

  return fetch(
    `/api/accounts/${userId}/favourites`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(body)
  }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error;
  });
};

export const getMovieReviews = (id) => {
  return fetch(
    `/api/reviews/${id}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};
