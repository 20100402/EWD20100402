import React, { useState } from 'react';
import PageTemplate from '../components/templateMovieListPage'
import Spinner from "../components/spinner";
import { getUpComingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import AddToMustWatch from '../components/cardIcons/addToMustWatch'

const UpcomingPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading, isError } = useQuery(["upcoming", { id: currentPage }], getUpComingMovies);

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
        title="Upcoming Movies"
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
export default UpcomingPage