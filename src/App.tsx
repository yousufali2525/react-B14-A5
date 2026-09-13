import { Suspense } from 'react';
import './App.css';
import type { Type } from './types/type';
import Products from './components/Products';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Footer from './components/Footer';

const ProductIconsData = async (): Promise<Type[]> => {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`);

  if (!res.ok) {
    throw new Error("Failed to load data.json");
  }

  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Products ProductIconsData={ProductIconsData()} />
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
