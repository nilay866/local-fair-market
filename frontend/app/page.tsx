"use client";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  qty: string;
  seller: string;
  distanceKm: number;
  fair: boolean;
};

const demoProducts: Product[] = [
  { id: 1, name: "Tomato", category: "Vegetables", price: 25, qty: "10 kg", seller: "Farmer A", distanceKm: 1.2, fair: true },
  { id: 2, name: "Eggs", category: "Grocery", price: 8, qty: "12 pcs", seller: "Seller B", distanceKm: 2.6, fair: true },
  { id: 3, name: "Rice", category: "Grains", price: 70, qty: "1 kg", seller: "Farmer C", distanceKm: 4.1, fair: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl p-4">
        <header className="flex items-center justify-between gap-3 py-4">
          <div>
            <h1 className="text-2xl font-bold">🛒 Local Fair Market</h1>
            <p className="text-gray-600">Sell & buy nearby with fair pricing.</p>
          </div>

          <a
            href="/sell"
            className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            + Sell Product
          </a>
        </header>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            className="w-full rounded-lg border bg-white p-3"
            placeholder="Search products (tomato, eggs, rice...)"
          />
          <select className="w-full rounded-lg border bg-white p-3 sm:w-60">
            <option>All Categories</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Grains</option>
            <option>Grocery</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Others</option>
          </select>
        </div>

        <h2 className="mt-6 text-lg font-semibold">Nearby Products</h2>

        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {demoProducts.map((p) => (
            <a
              key={p.id}
              href={`/product/${p.id}`}
              className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.category}</p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    p.fair ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {p.fair ? "Fair Price ✅" : "Overpriced ⚠️"}
                </span>
              </div>

              <div className="mt-3 text-sm text-gray-700">
                <p>Price: <span className="font-semibold">₹{p.price}</span></p>
                <p>Qty: {p.qty}</p>
                <p>Seller: {p.seller}</p>
                <p>Distance: {p.distanceKm} km</p>
              </div>

              <div className="mt-4 w-full rounded-lg bg-black px-4 py-2 text-center text-white hover:bg-gray-800">
                View / Buy
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
