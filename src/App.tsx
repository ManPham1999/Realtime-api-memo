import './App.css';
import React, { Suspense, lazy, Fragment, useEffect, useState } from 'react';
import Movie from './components/Movie';
import MovieWithMemorized from './components/MovieWithMemoried';
import Loading from './components/Loading';
const Products = lazy(() => import("./components/Products"));
function App() {
  const [, setToggle] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setToggle((toggle) => !toggle);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <Fragment>
      <div className="container">
        <code>this is example for using React.memo() ro reduce re-rendering of child component ===`{'>'}` open console for result !</code>
        <Suspense fallback={<Loading />}>
          <div>
            <Products />
          </div>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <div>
            {/* not use memo */}
            <Movie title="ahjhj" releaseDate="13/6/1999" />
          </div>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <div>
            {/* using memo */}
            <MovieWithMemorized title="ahjhj" releaseDate="13/6/1999" />
          </div>
        </Suspense>
      </div>
    </Fragment>
  );
}

export default App;
