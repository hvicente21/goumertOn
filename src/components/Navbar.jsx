import React from "react";
import Logo from "../assets/logo.png"; // ajuste o caminho da logo se necessário

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo + Nome */}
        <div className="flex items-center">
          <img src={Logo} alt="GourmetOn Logo" className="h-20 w-24 mr-2 " />
          <h1 className="text-xl font-bold text-red-500">GourmetOn</h1>
        </div>

        {/* Links */}
        <ul className="flex gap-6">
          <li><a href="#hero" className="hover:text-red-500">Início</a></li>
          <li><a href="#menu" className="hover:text-red-500">Cardápio</a></li>
          <li><a href="#features" className="hover:text-red-500">Funcionalidades</a></li>
          <li><a href="#testimonials" className="hover:text-red-500">Depoimentos</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
