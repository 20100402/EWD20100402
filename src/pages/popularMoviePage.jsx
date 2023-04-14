import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import Spinner from "../components/spinner";
import { getPopularMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import AddToMustWatch from '../components/cardIcons/addToMustWatch'

const PopularPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("popular", getPopularMovies);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data ? data.results : [];

    return (
        <PageTemplate
        title="Popular Movies"
        movies={movies}
        action={(movie) => {
          return <AddToMustWatch movie={movie} />
        }}
      />
    )
};
export default PopularPage