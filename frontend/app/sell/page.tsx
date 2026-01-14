"use client";

import { useMemo, useState } from "react";

const marketPrices: Record<string, { avg: number; max: number; category: string }> = {
  tomato: { avg: 25, max: 40, category: "Vegetables" },
  eggs: { avg: 8, max: 11, category: "Grocery" },
  rice: { avg: 60, max: 80, category: "Grains" },
};

function guessCategory(name: string): string {
  const key = name.trim().toLowerCase();
  if (!key) return "Others";
  for (const p of Object.keys(marketPrices)) {
    if (key.includes(p)) return marketPrices[p].category;
  }
  return "Others";
}

export default function SellPage() {
  const [form, setForm] = useState({
    name: "",
    qty: "",
    price: "",
    location: "",
    premiumReason: "",
  });

  const suggestedCategory = useMemo(() => guessCategory(form.name), [form.name]);

  const marketInfo = useMemo(() => {
    const key = form.name.trim().toLowerCase();
    const found = Object.keys(marketPrices).find((p) => key.includes(p));
    return found ? marketPrices[found] : null;
  }, [form.name]);

  const priceNumber = Number(form.price || 0);
  const isOverpriced = marketInfo ? priceNumber > marketInfo.max : false;

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();

    if (isOverpriced && !form.premiumReason) {
      alert("⚠️ Price too high. Select premium reason or reduce price.");
      return;
    }

    alert("✅ Product posted (Demo)");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-xl p-4">
        <header className="flex items-center justify-between py-4">
          <div>
            <h1 className="text-2xl font-bold">📦 Sell Product</h1>
            <p className="text-gray-600">Easy listing for farmers (demo).</p>
          </div>
          <a href="/" className="text-blue-600 hover:underline">← Back</a>
        </header>

        <form onSubmit={submit} className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="grid gap-3">
            <label className="grid gap-1">
              <span className="text-sm font-semibold">Product name</span>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="rounded-lg border p-3"
                placeholder="Tomato / Eggs / Rice..."
                required
              />
              <span className="text-xs text-gray-500">
                Auto category: <b>{suggestedCategory}</b>
              </span>
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-semibold">Quantity</span>
              <input
                name="qty"
                value={form.qty}
                onChange={onChange}
                className="rounded-lg border p-3"
                placeholder="1 kg / 10 kg / 12 pcs"
                required
              />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-semibold">Price (₹)</span>
              <input
                name="price"
                value={form.price}
                onChange={onChange}
                className="rounded-lg border p-3"
                placeholder="Enter price"
                required
              />
              {marketInfo && (
                <span className="text-xs text-gray-500">
                  Max allowed: ₹{marketInfo.max}
                </span>
              )}
              {isOverpriced && (
                <span className="text-sm font-semibold text-red-600">
                  ⚠️ Too high! Reduce price or select premium reason.
                </span>
              )}
            </label>

            {isOverpriced && (
              <label className="grid gap-1">
                <span className="text-sm font-semibold">Premium reason</span>
                <select
                  name="premiumReason"
                  value={form.premiumReason}
                  onChange={onChange}
                  className="rounded-lg border p-3"
                >
                  <option value="">Select reason</option>
                  <option value="Organic">Organic / Premium quality</option>
                  <option value="Delivery included">Delivery included</option>
                  <option value="Limited stock">Limited stock</option>
                </select>
              </label>
            )}

            <label className="grid gap-1">
              <span className="text-sm font-semibold">Location</span>
              <input
                name="location"
                value={form.location}
                onChange={onChange}
                className="rounded-lg border p-3"
                placeholder="Village / Area"
                required
              />
            </label>

            <button className="rounded-lg bg-black px-4 py-3 text-white hover:bg-gray-800">
              ✅ Post Product
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
