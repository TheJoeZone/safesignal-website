import React from "react";
import { handleCheckout } from "./checkout";

export default function Home() {
  return (
    <div>
      <header className="p-6 bg-white shadow flex justify-between">
        <h1 className="font-bold text-xl">SafeSignal Advisor</h1>
        <nav className="space-x-4">
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="bg-green-500 text-white px-4 py-2 rounded">Try Free</a>
          <a href="#pricing" className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</a>
        </nav>
      </header>

      <main>
        <section className="text-center py-20 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
          <h1 className="text-5xl font-bold mb-4">Spot Scams Before They Spot You</h1>
          <p>Forward suspicious emails, texts, or calls for expert review</p>
        </section>

        <section id="pricing" className="py-16 text-center bg-gray-100">
          <h2 className="text-3xl font-bold mb-6">Simple, transparent pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-2xl mb-4">29 CHF/mo</p>
              <button onClick={() => handleCheckout("4gM14ngJZ0PLbs21phf3a00")}
                className="bg-blue-600 text-white px-4 py-2 rounded">Choose Starter</button>
            </div>
            <div className="p-6 bg-white rounded shadow border-2 border-blue-500">
              <h3 className="text-xl font-bold mb-2">Growth <span className="text-sm text-blue-600">(Most Popular)</span></h3>
              <p className="text-2xl mb-4">49 CHF/mo</p>
              <button onClick={() => handleCheckout("aFa28reBR7e967Id7Zf3a01")}
                className="bg-blue-600 text-white px-4 py-2 rounded">Choose Growth</button>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Ultimate</h3>
              <p className="text-2xl mb-4">79 CHF/mo</p>
              <button onClick={() => handleCheckout("bJe7sLdxNfKF8fQfg7f3a02")}
                className="bg-blue-600 text-white px-4 py-2 rounded">Choose Ultimate</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>© 2025 SafeSignal Advisor</p>
      </footer>
    </div>
  );
}
