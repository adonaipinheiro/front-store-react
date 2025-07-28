// src/domains/cart/useCartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../product/types";

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (id: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product) => {
        const items = get().items;
        const existing = items.find((i) => i.id === product.id);

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },
      remove: (id) => {
        const items = get().items.filter((i) => i.id !== id);
        set({ items });
      },
      clear: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
