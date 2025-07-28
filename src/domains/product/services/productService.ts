export async function getAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Erro ao buscar produtos");
    return response.json();
}

export async function getProductById(id: string | number) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Erro ao buscar produto");
    return res.json();
  }