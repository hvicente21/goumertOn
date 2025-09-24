import React, { useEffect, useState } from "react";

export default function MenuSection() {
  const [pratos, setPratos] = useState([]);

  // Busca pratos japoneses na API
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese")
      .then((res) => res.json())
      .then((data) => {
        setPratos(data.meals || []);
      })
      .catch((err) => console.error("Erro ao buscar pratos:", err));
  }, []);

  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-6">

        {/* Por que escolher o GourmetOn */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Por que escolher o GourmetOn?
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Tradição japonesa com qualidade, rapidez e sabores únicos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-yellow-200 rounded-xl shadow-sm p-6 bg-white">
              <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">JAPAN</span>
              <h3 className="text-xl font-semibold mt-3">Autenticidade</h3>
              <p className="text-gray-600 mt-2">Receitas japonesas originais.</p>
            </div>
            <div className="border border-yellow-200 rounded-xl shadow-sm p-6 bg-white">
              <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">JAPAN</span>
              <h3 className="text-xl font-semibold mt-3">Entrega rápida</h3>
              <p className="text-gray-600 mt-2">Chega quentinho na sua casa.</p>
            </div>
            <div className="border border-yellow-200 rounded-xl shadow-sm p-6 bg-white">
              <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">JAPAN</span>
              <h3 className="text-xl font-semibold mt-3">Promoções exclusivas</h3>
              <p className="text-gray-600 mt-2">Ofertas especiais para clientes.</p>
            </div>
            <div className="border border-yellow-200 rounded-xl shadow-sm p-6 bg-white">
              <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">JAPAN</span>
              <h3 className="text-xl font-semibold mt-3">Favoritos</h3>
              <p className="text-gray-600 mt-2">Guarde seus pratos preferidos.</p>
            </div>
            <div className="border border-yellow-200 rounded-xl shadow-sm p-6 bg-white">
              <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">JAPAN</span>
              <h3 className="text-xl font-semibold mt-3">Pedidos offline</h3>
              <p className="text-gray-600 mt-2">Monte seu pedido e finalize depois.</p>
            </div>
            <div className="border border-yellow-200 rounded-xl shadow-sm p-6 bg-white">
              <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">JAPAN</span>
              <h3 className="text-xl font-semibold mt-3">Avaliações reais</h3>
              <p className="text-gray-600 mt-2">Opiniões de clientes como você.</p>
            </div>
          </div>
        </div>

        {/* Cardápio */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Pratos japoneses em destaque</h2>
          {pratos.length === 0 ? (
            <p className="text-gray-500">Carregando pratos...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pratos.map((prato) => (
                <div key={prato.idMeal} className="border rounded-xl shadow-sm overflow-hidden bg-white">
                  <img
                    src={prato.strMealThumb}
                    alt={prato.strMeal}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{prato.strMeal}</h3>
                    <p className="text-gray-600 text-sm">Sabor japonês autêntico. Peça já!</p>
                    <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded-full text-sm">
                      Pedir agora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
