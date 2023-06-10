import { useEffect, useState } from "react";

interface useMoviesListProps {
  pageNumber: number;
  listBy: string;
}

interface MoviesListProps {
  adult: boolean;
  backdrop_path: TemplateStringsArray;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGY0Mjg3MDM5MjVmNWM5YWJmODY4M2M0ZTgwNjJmNiIsInN1YiI6IjY0NDliZTM5MmNlZmMyMDUwNGFlODI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52DpnfcAK8Pu1RZfeDXu9reth2-f54h94mpEnOUzuZM",
  },
};

export function useMoviesList({
  pageNumber,
  listBy,
}: useMoviesListProps) {
  const [moviesList, setMoviesList] = useState<MoviesListProps[]>([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    requestMoviesList();

    async function requestMoviesList() {
      setStatus("loading");
      setMoviesList([]);
      const promisse = await fetch(
          `https://api.themoviedb.org/3/movie/${listBy}?language=pt-BR&page=${pageNumber}`,
          options
        ),
        processedResponse = await promisse.json(),
        movies = processedResponse.results;

      setMoviesList(movies);
      setStatus("loaded");
    }
  }, [listBy, pageNumber]);

  return { moviesList, status };
}
