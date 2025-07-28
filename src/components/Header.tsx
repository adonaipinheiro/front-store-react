import { Link } from "react-router-dom";
import { useCartStore } from "../domains/cart/useCartStore";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-black text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={"logo_impacta.png"} alt="Impacta Digital" className="h-8" />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-[var(--color-primary)] transition"
          >
            Início
          </Link>

          <Link
            to="/carrinho"
            className="relative hover:text-[var(--color-primary)] transition"
          >
            Carrinho
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[var(--color-primary)] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
