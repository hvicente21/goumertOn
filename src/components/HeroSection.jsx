import React from "react";
import HeroImg from "../assets/hero.jpg"; // 👈 importa a imagem local

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${HeroImg})` }} // 👈 usa a imagem importada
    >
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        O Delivery GourmetOn Japan
      </h1>
      <p className="text-lg mb-6 drop-shadow-md">
        Sabores autênticos do Japão, direto na sua casa. Peça e aproveite sushi, ramen e muito mais.
      </p>
      <a
        href="#menu"
        className="px-6 py-3 bg-red-500 rounded-full text-lg font-semibold hover:bg-red-600 transition"
      >
        Download 
      </a>
    </section>
  );
}
