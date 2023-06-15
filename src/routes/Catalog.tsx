import { CatalogContent } from "../components/CatalogContent";
import { useState, createContext } from "react";

export interface MoviesListProps {
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

interface MoviesListContextProps {
  moviesList: MoviesListProps[];
  setMoviesList: (moviesList: MoviesListProps[]) => void;
}

interface PageContextProps {
  currentPage: {
    number: number;
    apiListIndex: number;
  };
  setCurrentPage: (currentPage: {
    number: number;
    apiListIndex: number;
  }) => void;
}

interface FiltersContextProps {
  currentFilters: number[];
  setCurrentFilters: (currentFilters: number[]) => void;
}

interface StatusContextProps {
  status: string;
  setStatus: (status: string) => void;
}

interface OrdenationContextProps {
  currentOrdenation: string;
  setCurrentOrdenation: (currentOrdenation: string) => void;
}

interface LoadMoviesContextProps {
  loadMovies: {
    ordenation: string;
    currentFilters: number[];
    page: {
      number: number;
      apiListIndex: number;
    };
  };
  setLoadMovies: (loadMovies: {
    ordenation: string;
    currentFilters: number[];
    page: {
      number: number;
      apiListIndex: number;
    };
  }) => void;
}

export const MoviesListContext = createContext<MoviesListContextProps>(
  {} as MoviesListContextProps
);

export const PageContext = createContext<PageContextProps>(
  {} as PageContextProps
);

export const OrdenationContext = createContext<OrdenationContextProps>(
  {} as OrdenationContextProps
);

export const FiltersContext = createContext<FiltersContextProps>(
  {} as FiltersContextProps
);

export const StatusContext = createContext<StatusContextProps>(
  {} as StatusContextProps
);

export const LoadMoviesContext = createContext<LoadMoviesContextProps>(
  {} as LoadMoviesContextProps
);

export function Catalog() {
  const [moviesList, setMoviesList] = useState<MoviesListProps[]>([]);

  const [currentPage, setCurrentPage] = useState({
    number: 1,
    apiListIndex: 0,
  });

  const [currentOrdenation, setCurrentOrdenation] = useState("popular");

  const [currentFilters, setCurrentFilters] = useState<number[]>([]);

  const [status, setStatus] = useState("unloaded");

  const [loadMovies, setLoadMovies] = useState<{
    ordenation: string;
    currentFilters: number[];
    page: {
      number: number;
      apiListIndex: number;
    };
  }>({
    ordenation: "popular",
    currentFilters: [],
    page: {
      number: 1,
      apiListIndex: 0,
    },
  });

  return (
    <MoviesListContext.Provider value={{ moviesList, setMoviesList }}>
      <PageContext.Provider value={{ currentPage, setCurrentPage }}>
        <FiltersContext.Provider value={{ currentFilters, setCurrentFilters }}>
          <StatusContext.Provider value={{ status, setStatus }}>
            <OrdenationContext.Provider
              value={{ currentOrdenation, setCurrentOrdenation }}
            >
              <LoadMoviesContext.Provider value={{ loadMovies, setLoadMovies }}>
                <CatalogContent />
              </LoadMoviesContext.Provider>
            </OrdenationContext.Provider>
          </StatusContext.Provider>
        </FiltersContext.Provider>
      </PageContext.Provider>
    </MoviesListContext.Provider>
  );
}
