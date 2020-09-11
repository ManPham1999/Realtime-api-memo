import * as React from 'react';
export interface Movies {
  title: string,
  releaseDate: string
}
export type MovieProps = Movies;
const Movie = (props: MovieProps) => {
  console.log("movie rendered!");
  return (
    <div>
      <h2>this is movie page</h2>
    </div>
  );
}

export default Movie;

