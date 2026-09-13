import { Suspense } from 'react';
import './App.css';
import type { Type } from './types/type';
import Products from './components/Products';

const ProductIconsData = async (): Promise<Type[]> => {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
  const data = await res.json();

  return data;
};

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Products ProductIconsData={ProductIconsData()} />
      </Suspense>
    </>
  );
}

export default App;
