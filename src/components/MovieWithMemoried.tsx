import * as React from 'react';
import { MovieProps } from "./Movie";
function MovieWithMemoried(props: MovieProps) {
  console.log("MovieWithMemoried rendered!");

  return (
    <div>
      <h2>this is MovieWithMemoried</h2>
    </div>
  );
}
const memoizedComponent = React.memo(MovieWithMemoried);
export default memoizedComponent;