import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGY0Mjg3MDM5MjVmNWM5YWJmODY4M2M0ZTgwNjJmNiIsInN1YiI6IjY0NDliZTM5MmNlZmMyMDUwNGFlODI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52DpnfcAK8Pu1RZfeDXu9reth2-f54h94mpEnOUzuZM",
  },
};

interface GenreProps {
  id: number;
  name: string;
}

export function useGenresList() {
  const [genresList, setGenresList] = useState<GenreProps[]>([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    requestGenresList();

    async function requestGenresList() {
      setStatus("loading");
      setGenresList([]);
      const promisse = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR",
          options
        ),
        processedResponse = await promisse.json(),
        genres = processedResponse.genres;

      setGenresList(genres);
      setStatus("loaded");
    }
  }, []);

  return { genresList, status };
}
