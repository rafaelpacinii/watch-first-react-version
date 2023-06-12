export async function getNonFilteredMoviesList(
  currentPage: {
    number: number;
    apiListIndex: number;
  },
  currentOrdenation: string
) {
  const promisse = await fetch(
      `https://api.themoviedb.org/3/movie/${currentOrdenation}?language=pt-BR&page=${currentPage.number}&api_key=${import.meta.env.VITE_REACT_API_KEY}`
    ),
    processedResponse = await promisse.json();
  return processedResponse.results;
}
