import type { Type } from "../types/type";

interface ProductProps {
  productIcon: Type;
}

const Product = ({ productIcon }: ProductProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Icon */}
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100">
        <img
          src={productIcon.icon}
          alt={productIcon.name}
          className="h-10 w-10 object-contain"
        />
      </div>

      {/* Content */}
      <div>
        
        {/* Badge & Rating */}
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {productIcon.badge}
          </span>

          <span className="text-sm font-semibold text-gray-700">
            ⭐ {productIcon.rating}
          </span>
        </div>

        {/* Name */}
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          {productIcon.name}
        </h2>

        {/* Description */}
        <p className="mb-5 text-sm leading-6 text-gray-500">
          {productIcon.description}
        </p>

        {/* Category & Difficulty */}
        <div className="mb-5 flex flex-wrap gap-2">
          <span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
            {productIcon.category}
          </span>

          <span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
            {productIcon.difficulty}
          </span>
        </div>

        {/* Button */}
        <button
          className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          Add to Stack
        </button>

      </div>
    </div>
  );
};

export default Product;
