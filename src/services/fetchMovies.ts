interface FetchMoviesConfig {
  pageNumber: number;
  movieList: string;
}

export async function fetchMovies({
  pageNumber,
  movieList,
}: FetchMoviesConfig) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGY0Mjg3MDM5MjVmNWM5YWJmODY4M2M0ZTgwNjJmNiIsInN1YiI6IjY0NDliZTM5MmNlZmMyMDUwNGFlODI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52DpnfcAK8Pu1RZfeDXu9reth2-f54h94mpEnOUzuZM",
    },
  };

  const apiResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movieList}?language=pt-BR&page=${pageNumber}`,
    options
  );


  return await apiResponse.json();
}
