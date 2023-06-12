import { getNonFilteredMoviesList } from "./getNonFilteredMoviesList";

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

export async function getFilteredMoviesList(
  currentPage: {
    number: number;
    apiListIndex: number;
  },
  currentOrdenation: string,
  currentFilters: number[]
) {
  let page = currentPage; // eslint-disable-line prefer-const
  let auxMoviesList = await getNonFilteredMoviesList(page, currentOrdenation);
  let filteredMoviesList: MoviesListProps[] = []; // eslint-disable-line prefer-const

  while (filteredMoviesList.length < 20) {
    const movieGenres = auxMoviesList[page.apiListIndex].genre_ids;
    let validMovieCounter = 0;
    for (let j = 0; j < currentFilters.length; j++) {
      for (let k = 0; k < movieGenres.length; k++) {
        if (currentFilters[j] == movieGenres[k]) {
          validMovieCounter++;
          break;
        }
      }
    }
    if (validMovieCounter == currentFilters.length) {
      filteredMoviesList.push(auxMoviesList[page.apiListIndex]);
    }

    page.apiListIndex ++;

    if (page.apiListIndex == 20) {
      page.number++;
      page.apiListIndex = 0;
      auxMoviesList = await getNonFilteredMoviesList(page, currentOrdenation);
    }
  }

  console.log(filteredMoviesList);

  return {filteredMoviesList, page};
}
