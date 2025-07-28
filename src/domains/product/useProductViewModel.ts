import { useEffect, useState } from "react";
import { getAllProducts } from "./services/productService";
import type { Product } from "./types";

export function useProductViewModel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
}
