// src/domains/product/useProductDetailViewModel.ts
import { useEffect, useState } from "react";
import { getProductById } from "./services/productService";
import type { Product } from "./types";

export function useProductDetailViewModel(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getProductById(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading };
}
