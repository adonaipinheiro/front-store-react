// src/pages/Cart.tsx
import { useCartStore } from "../domains/cart/useCartStore";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export default function Cart() {
  const { items, remove, clear } = useCartStore();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Carrinho</h1>

        {items.length === 0 ? (
          <p className="text-[var(--color-muted)]">Seu carrinho está vazio.</p>
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex gap-4 items-center">
                  <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                  <div>
                    <h2 className="font-semibold text-sm">{item.title}</h2>
                    <p className="text-[var(--color-muted)] text-sm">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => remove(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remover
                </button>
              </div>
            ))}

            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold text-lg">
                Total: ${total.toFixed(2)}
              </span>
              <div className="flex gap-4">
              <Button variant="outline" onClick={clear}>Limpar</Button>
              <Button variant="primary">Finalizar compra</Button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link to="/" className="text-sm text-[var(--color-primary)] hover:underline">
            ← Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
