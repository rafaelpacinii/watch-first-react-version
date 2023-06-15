export async function getNonFilteredMoviesList(
  pageNumber: number,
  currentOrdenation: string
) {
  const promisse = await fetch(
      `https://api.themoviedb.org/3/movie/${currentOrdenation}?language=pt-BR&page=${pageNumber}&api_key=${
        import.meta.env.VITE_REACT_API_KEY
      }`
    ),
    processedResponse = await promisse.json(),
    nonFilteredMoviesList = processedResponse.results,
    newPageNumber = pageNumber + 1,
    listEnd = nonFilteredMoviesList.length < 20 ? true : false;
  return { nonFilteredMoviesList, newPageNumber, listEnd };
}
