import { getNonFilteredMoviesList } from "./getNonFilteredMoviesList";
import { MoviesListProps } from "../routes/Catalog";

export async function getFilteredMoviesList(
  currentPage: {
    number: number;
    apiListIndex: number;
  },
  currentOrdenation: string,
  currentFilters: number[]
) {
  let listEnd = false;
  let page = currentPage; // eslint-disable-line prefer-const
  let filteredMoviesList: MoviesListProps[] = []; // eslint-disable-line prefer-const

  let { nonFilteredMoviesList, newPageNumber } = await getNonFilteredMoviesList(
    page.number,
    currentOrdenation
  );

  page.number = newPageNumber;

  for (let x = 0; x < 20; x = filteredMoviesList.length) {
    if (nonFilteredMoviesList[page.apiListIndex] === undefined) {
      listEnd = true;
      break;
    }

    const movieGenres = nonFilteredMoviesList[page.apiListIndex].genre_ids;
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
      filteredMoviesList.push(nonFilteredMoviesList[page.apiListIndex]);
    }

    page.apiListIndex++;

    if (page.apiListIndex == -1 || page.apiListIndex == 20) {
      page.apiListIndex = 0;

      ({ nonFilteredMoviesList, newPageNumber } = await getNonFilteredMoviesList(
        page.number,
        currentOrdenation
      ));
      page.number = newPageNumber;
    }
  }

  console.log(
    "Current: Number - " + page.number + ", Index - " + page.apiListIndex
  );

  console.log(filteredMoviesList);

  return { filteredMoviesList, page, listEnd };
}
