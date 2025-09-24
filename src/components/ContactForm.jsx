import React, { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [depoimento, setDepoimento] = useState("");
  const [mensagemFinal, setMensagemFinal] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setStep(2); // vai para a etapa do depoimento
  };

  const handleDepoimentoSubmit = (e) => {
    e.preventDefault();
    if (depoimento.trim() === "") return;
    setMensagemFinal("Obrigado pelo seu depoimento! 💖");
    setStep(3); // finalizou
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>

        {/* Etapa 1 - E-mail */}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="flex justify-center space-x-4">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-4 py-2 w-80"
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg"
            >
              Enviar
            </button>
          </form>
        )}

        {/* Etapa 2 - Depoimento */}
        {step === 2 && (
          <form onSubmit={handleDepoimentoSubmit} className="flex flex-col items-center space-y-4">
            <textarea
              placeholder="Digite seu depoimento"
              value={depoimento}
              onChange={(e) => setDepoimento(e.target.value)}
              className="border rounded-lg px-4 py-2 w-96 h-32"
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg"
            >
              Enviar Depoimento
            </button>
          </form>
        )}

        {/* Etapa 3 - Mensagem final */}
        {step === 3 && (
          <p className="text-green-600 font-semibold mt-6">{mensagemFinal}</p>
        )}
      </div>
    </section>
  );
}
