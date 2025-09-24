import React from "react";

const testimonials = [
  { name: "João", text: "Entrega super rápida e comida maravilhosa! 🍣" },
  { name: "Maria", text: "Adorei a variedade e o atendimento. Recomendo!" },
  { name: "Carlos", text: "Melhor experiência de delivery que já tive." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Depoimentos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-gray-100 shadow rounded-lg">
            <p className="italic">"{t.text}"</p>
            <h4 className="mt-4 font-semibold">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
