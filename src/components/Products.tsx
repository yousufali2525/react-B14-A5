import { use, useState } from "react";
import type { Type } from "../types/type";
import Product from "./product";

interface ProductsProps {
  ProductIconsData: Promise<Type[]>;
}

const Products = ({ ProductIconsData }: ProductsProps) => {
  const productIcons = use(ProductIconsData);

  const [selectedProducts, setSelectedProducts] = useState<Type[]>([]);

  const handleAddToStack = (product: Type) => {
    setSelectedProducts((prev) => {
      const alreadySelected = prev.some(
        (item) => item.id === product.id
      );

      if (alreadySelected) {
        return prev;
      }

      return [...prev, product];
    });
  };

 
  const handleRemove = (id: string) => {
    setSelectedProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  
  const handleRemoveAll = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-6">

      
      <div className="w-full lg:col-span-3">

        
        <div className="mb-6 text-left">

          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#6366F1] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1.5 text-xs leading-5 text-gray-400 sm:text-sm">
            Pick one technology per category to build your ideal stack.
          </p>

        </div>

        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {productIcons.map((productIcon) => (
            <Product
              key={productIcon.id}
              productIcon={productIcon}
              handleAddToStack={handleAddToStack}
              selectedProducts={selectedProducts}
            />
          ))}

        </div>

      </div>


      <div className="w-full self-start lg:sticky lg:top-24">

        <div className="w-full rounded-[20px] border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">

          <h3 className="mb-1 text-lg font-bold text-slate-900">
            Your Stack
          </h3>

          <p className="mb-5 text-xs text-slate-400">
            {selectedProducts.length} Technology Selected
          </p>


          
          <div className="mb-5 space-y-3">

            {selectedProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 p-3"
              >

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-6 w-6 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <span className="text-xs text-slate-400">
                      {item.category}
                    </span>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="ml-2 shrink-0 cursor-pointer px-2 py-1 text-base text-slate-400 transition hover:text-red-500"
                >
                  ✕
                </button>

              </div>
            ))}


            {selectedProducts.length === 0 && (
              <div className="rounded-xl border border-gray-100 px-3 py-7 text-center">
                <p className="text-xs text-slate-300">
                  Your stack is empty.
                </p>
              </div>
            )}

          </div>


         
          {selectedProducts.length > 0 && (
            <button
              type="button"
              onClick={handleRemoveAll}
              className="w-full cursor-pointer rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
            >
              Remove All
            </button>
          )}

        </div>

      </div>

    </div>
  );
};

export default Products;