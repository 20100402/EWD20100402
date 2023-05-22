import React, { useState } from "react";
import { addToFavorites, getIdWithToken } from "../api/tmdb-api";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movie) => {
    let updatedWatchList = [...watchList];
    if (!watchList.includes(movie.id)) {
      updatedWatchList.push(movie.id);
    }
    setWatchList(updatedWatchList);
  };
  const addToFavourites = async (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
      callFunctions(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const callFunctions = async (movieId) => {
    try {
      const id = await getIdWithToken();
      const res = await addToFavorites(movieId, id);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const removeFromWatchList = (movie) => {
    setWatchList(watchList.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    // NEW
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        watchList,
        addToFavourites,
        addToWatchList,
        removeFromFavourites,
        removeFromWatchList,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
