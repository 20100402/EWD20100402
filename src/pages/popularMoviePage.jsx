import React, { useState } from 'react';
import PageTemplate from '../components/templateMovieListPage'
import Spinner from "../components/spinner";
import { getPopularMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import AddToMustWatch from '../components/cardIcons/addToMustWatch'

const PopularPage = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading, isError } = useQuery(["popular", { id: currentPage }], getPopularMovies);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data ? data.results : [];
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

    return (
        <>
        <PageTemplate
        title="Popular Movies"
        movies={movies}
        action={(movie) => {
          return <AddToMustWatch movie={movie} />
        }}
      />
      <div align ="center">
      
      <div>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div></>
    )
};
export default PopularPage