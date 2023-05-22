import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import WatchListPage from "./pages/watchListPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingPage from "./pages/upcomingMoviesPage";
import PopularMoviePage from "./pages/popularMoviePage";
import TopRatedMoviePage from "./pages/topRatedMoviePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import SignOut from "./pages/logoutPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthContextProvider from "./contexts/authContext";
import PrivateRoute from "./privateRoute";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />
              <Route path="/movies/topRated" element={<TopRatedMoviePage />} />
              <Route path="/movies/popular" element={<PopularMoviePage />} />
              <Route path="/movies/watchList" element={<WatchListPage />} />
              <Route
                path="/movies/:id"
                element={
                  <PrivateRoute>
                    <MoviePage />
                  </PrivateRoute>
                }
              />

              <Route path="/movies/upcoming" element={<UpcomingPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/logout" element={<SignOut />} />
            </Routes>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
