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
    <div
      className={`w-full rounded-2xl border bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isSelected
          ? "border-pink-400 ring-2 ring-pink-100"
          : "border-gray-100"
      }`}
    >

      <div className="mb-6 sm:mb-7 flex items-start justify-between gap-3">

        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center">
          <img
            src={productIcon.icon}
            alt={productIcon.name}
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
          />
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-emerald-600">
          {productIcon.badge}
        </span>

      </div>


      <h2 className="mb-3 text-xl sm:text-2xl font-bold text-gray-900">
        {productIcon.name}
      </h2>


      <p className="mb-6 min-h-0 sm:min-h-[48px] text-sm leading-6 text-gray-400">
        {productIcon.description}
      </p>


      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-4">

        <span className="rounded-md bg-gray-50 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium text-gray-500">
          {productIcon.category}
        </span>

        <span className="text-[11px] sm:text-xs font-medium text-gray-500">
          {productIcon.difficulty}
        </span>

        <span className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-600">
          <span className="text-yellow-400">★</span>
          {productIcon.rating}
        </span>

      </div>


      <button
        onClick={() => handleAddToStack(productIcon)}
        disabled={isSelected}
        className={`w-full rounded-lg py-3 text-sm font-semibold text-white transition-all duration-200 active:scale-[0.98] ${
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