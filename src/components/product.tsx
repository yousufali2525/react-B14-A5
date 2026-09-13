import type { Type } from "../types/type";

interface ProductProps {
  productIcon: Type;
  handleAddToStack: (product: Type) => void;
  selectedProducts: Type[];
}

const Product = ({
  productIcon,
  handleAddToStack,
  selectedProducts,
}: ProductProps) => {
  const isSelected = selectedProducts.some(
    (item) => item.id === productIcon.id
  );

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* Top: Icon + Badge */}
      <div className="mb-7 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={productIcon.icon}
            alt={productIcon.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
          {productIcon.badge}
        </span>
      </div>

      {/* Product Name */}
      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        {productIcon.name}
      </h2>

      {/* Description */}
      <p className="mb-6 min-h-[48px] text-sm leading-6 text-gray-400">
        {productIcon.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mb-5 flex items-center justify-between border-t border-gray-100 pt-4">

        <span className="rounded-md bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
          {productIcon.category}
        </span>

        <span className="text-xs font-medium text-gray-500">
          {productIcon.difficulty}
        </span>

        <span className="flex items-center gap-1 text-sm font-semibold text-gray-600">
          <span className="text-yellow-400">★</span>
          {productIcon.rating}
        </span>

      </div>

      {/* Button */}
      <button
        onClick={() => handleAddToStack(productIcon)}
        disabled={isSelected}
        className={`w-full rounded-lg py-3 text-sm font-semibold text-white transition-all duration-200 ${
          isSelected
            ? "cursor-not-allowed bg-gray-400"
            : "cursor-pointer bg-[#080d1b] hover:bg-gray-800"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Product;