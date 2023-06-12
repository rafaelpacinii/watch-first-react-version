import { useEffect, useState, useContext } from "react";
import {
  PageContext,
  OrdenationContext,
  FiltersContext,
} from "../routes/Catalog";
import { getNonFilteredMoviesList } from "../services/getNonFilteredMoviesList";
import { getFilteredMoviesList } from "../services/getFilteredMoviesList";

interface MoviesListProps {
  adult: boolean;
  backdrop_path: TemplateStringsArray;
  genre_ids: number[];
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

export function useMoviesList() {
  const { currentPage } = useContext(PageContext);
  const { currentOrdenation } = useContext(OrdenationContext);
  const { currentFilters } = useContext(FiltersContext);
  const [moviesList, setMoviesList] = useState<MoviesListProps[]>([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    async function requestMoviesList() {
      setStatus("loading");
      setMoviesList([]);
      if (currentFilters.length == 0) {
        setMoviesList(
          await getNonFilteredMoviesList(currentPage, currentOrdenation)
        );
      } else {
        setMoviesList(
          await getFilteredMoviesList(
            currentPage,
            currentOrdenation,
            currentFilters
          )
        );
      }
      setStatus("loaded");
    }

    requestMoviesList();
  }, []);

  return { moviesList, status };
}
