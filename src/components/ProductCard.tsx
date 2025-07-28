import type { Product } from "../domains/product/types";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Link to={`/produto/${product.id}`} className="block">
      <div className="rounded-lg border border-[var(--color-gray)] bg-[var(--background)] p-4 shadow-sm hover:shadow-md transition">
        <div className="bg-white p-4 rounded-md h-40 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h2 className="text-base font-semibold text-[var(--foreground)] mt-4 line-clamp-2 min-h-[48px]">
          {product.title}
        </h2>
        <p className="text-[var(--color-primary)] text-lg font-bold mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
