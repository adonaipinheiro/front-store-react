import { useProductViewModel } from "../domains/product/useProductViewModel";
import { ProductCard } from "../components/ProductCard";
import Header from "../components/Header";

export default function Home() {
  const { products, loading } = useProductViewModel();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="max-w-6xl mx-auto py-10 px-4">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Produtos</h1>
          <p className="text-[var(--color-muted)] text-sm">
            Veja os produtos disponíveis na vitrine Impacta.
          </p>
        </section>

        {loading ? (
          <p className="text-[var(--color-muted)]">Carregando...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
