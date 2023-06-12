import { getNonFilteredMoviesList } from "./getNonFilteredMoviesList";

export async function getFilteredMoviesList(
  currentPage: {
    number: number;
    apiListIndex: number;
  },
  currentOrdenation: string,
  currentFilters: number[]
) {
  let page = currentPage;
  let auxMoviesList = await getNonFilteredMoviesList(page, currentOrdenation);
  
  let filteredMoviesList = []; // eslint-disable-line prefer-const

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
      page = {
        number: page.number,
        apiListIndex: page.apiListIndex,
      };
    }

    page = {
      number: page.number,
      apiListIndex: 1 + page.apiListIndex,
    };

    if (page.apiListIndex == 20) {
      page = {
        number: 1 + page.number,
        apiListIndex: 0,
      };
      auxMoviesList = await getNonFilteredMoviesList(page, currentOrdenation);
    }
  }

  console.log(filteredMoviesList);

  return filteredMoviesList;
}
