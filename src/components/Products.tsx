import { use } from "react";
import type { Type } from "../types/type";
import Product from "./product";

interface ProductsProps {
  ProductIconsData: Promise<Type[]>;
}

const Products = ({ ProductIconsData }: ProductsProps) => {
  const productIcons = use(ProductIconsData);

  console.log(productIcons);

  return (
    <div className="grid grid-cols-3 gap-6">
      {productIcons.map((productIcon) => (
        <Product
          key={productIcon.id}
          productIcon={productIcon}
        />
      ))}
    </div>
  );
};

export default Products;