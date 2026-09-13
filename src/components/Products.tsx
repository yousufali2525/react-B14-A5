
import { use, useState } from "react";
import type { Type } from "../types/type";
import Product from "./product";

interface ProductsProps {
  ProductIconsData: Promise<Type[]>;
}

const Products = ({ ProductIconsData }: ProductsProps) => {
  const productIcons = use(ProductIconsData);

  const [selectedProducts, setSelectedProducts] = useState<Type[]>([]);

  // Add product to stack
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

  // Remove one product
  const handleRemove = (id: string) => {
    setSelectedProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Remove all products
  const handleRemoveAll = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 p-6 lg:grid-cols-4">

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
        {productIcons.map((productIcon) => (
          <Product
            key={productIcon.id}
            productIcon={productIcon}
            handleAddToStack={handleAddToStack}
            selectedProducts={selectedProducts}
          />
        ))}
      </div>

      {/* Your Stack */}
        <div className="sticky top-6 w-full rounded-[24px] border border-gray-100 bg-white mt-[10px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

          <h3 className=" mt-[40px] mb-1 text-xl font-bold text-slate-900 ">
            Your Stack
          </h3>

          <p className="mb-5 text-sm text-slate-400">
            {selectedProducts.length} Technology Selected
          </p>

          <div className="mb-5 space-y-3">

            {selectedProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 p-3"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-6 w-6 object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
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
                  className="cursor-pointer px-2 py-1 text-base text-slate-400 transition hover:text-red-500"
                >
                  ✕
                </button>

              </div>
            ))}

            {selectedProducts.length === 0 && (
              <p className="py-5 text-center text-sm text-slate-400">
                No technology selected
              </p>
            )}

          </div>

          {selectedProducts.length > 0 && (
            <button
              type="button"
              onClick={handleRemoveAll}
              className="w-full cursor-pointer rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
            >
              Remove All
            </button>
          )}

        </div>

    </div>
  );
};

export default Products;