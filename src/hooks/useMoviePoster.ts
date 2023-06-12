import { useState } from "react";

interface useMoviePosterProps {
  posterPath: string;
  posterWidth: string;
}

export function useMoviePoster({
  posterPath,
  posterWidth,
}: useMoviePosterProps) {
  const [posterWidthPx, setPosterWidthPx] = useState("0");
  
  if (posterWidth == "small") {
    setPosterWidthPx("92");
  } else if (posterWidth == "medium") {
    setPosterWidthPx("185");
  } else {
    setPosterWidthPx("342");
  }

  const posterResult = `https://image.tmdb.org/t/p/w${posterWidthPx}${posterPath}`;

  return posterResult;
}
