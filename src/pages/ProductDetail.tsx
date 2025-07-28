// src/pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import { useProductDetailViewModel } from "../domains/product/useProductDetailViewModel";
import Header from "../components/Header";
import { useCartStore } from "../domains/cart/useCartStore";
import { Button } from "../components/Button";
import toast from "react-hot-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const { product, loading } = useProductDetailViewModel(id);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <div className="max-w-4xl mx-auto py-10 px-4">
        {loading || !product ? (
          <p className="text-[var(--color-muted)]">Carregando...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-80 object-contain"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-[var(--color-primary)] text-xl font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-[var(--color-muted)] mb-4">{product.category}</p>
              <p className="leading-relaxed">{product.description}</p>
              <Button onClick={() => {
                useCartStore.getState().add(product)
                toast.success("Produto adicionado ao carrinho!");
                }
                }>
  Adicionar ao carrinho
</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
