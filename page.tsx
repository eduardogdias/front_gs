"use client";

import { useState } from "react";
import About from "./About/page";
import AboutSun from "./AboutSun/page";
import Evaluation from "./Evaluation/page";
import Footer from "./Footer/page";
import Services from "./Services/page";
import "./page.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = "/Diagnostic";
  };

  return (
    <>
      <main>
        <section id="home">
          <div className="home-text">
            <h4 className="text-h4">Bem-Vindo a SunEcs</h4>
            <h1 className="text-h1">Mude para ter Mudanças...</h1>
            <p>
              Aqui você pode mudar sua perspectiva de vida. Economize e mude o
              meio ambiente, o poder está nas suas decisões!
            </p>
            <button className="home-btn" onClick={handlePopupOpen}>
              MUDE AGORA
            </button>
          </div>
        </section>

        
      </main>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handlePopupClose}>
              &times;
            </button>
            <h2>Cadastre-se</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" name="nome" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                CEP:
                <input type="text" name="cep" required />
              </label>
              <button type="submit" className="submit-btn">
                Cadastrar-se
              </button>
            </form>
          </div>
        </div>
      )}

      <AboutSun />
      <br />
      <Services />
      <br />
      <Evaluation />
      <br />
      <About />
    </>
  );
}
