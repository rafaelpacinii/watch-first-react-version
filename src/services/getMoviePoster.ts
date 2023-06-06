interface MovieProps {
  posterPath: string;
  posterWidth: string;
}

export function getMoviePoster({ posterPath, posterWidth }: MovieProps) {
  let posterWidthPx;
  if (posterWidth == "small") {
    posterWidthPx = "92";
  } else if (posterWidth == "medium") {
    posterWidthPx = "185";
  } else {
    posterWidthPx = "342";
  }

  const posterResult = `https://image.tmdb.org/t/p/w${posterWidthPx}${posterPath}`;

  return posterResult;
}
