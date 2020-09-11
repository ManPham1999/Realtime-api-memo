import * as React from 'react';
import useSWR, { mutate } from 'swr';
import Loading from './Loading';
export interface Product {
  id: string,
  name: string,
  price: number,
  status: boolean
}
const Products = () => {
  let { data } = useSWR("https://5e3995ba8d7e1300149cd550.mockapi.io/products/Products", { suspense: true });
  const items = data as Product[];

  const onhandleclick = () => {
    mutate('https://5e3995ba8d7e1300149cd550.mockapi.io/products/Products');
  }
  React.useEffect(() => {
    console.log("Products rendered!");
  }, [])
  return (
    <React.Fragment>
      {!items ? <Loading /> : <div>
        <h1>this is products page</h1>
        <ul>
          {items?.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
        <button onClick={onhandleclick}>click to re call api / inspect /open network</button>
      </div>}
    </React.Fragment>
  );
}

export default Products;