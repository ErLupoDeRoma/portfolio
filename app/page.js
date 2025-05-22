"use client";
import IO from "@/components/Riquadro_Io";
import Immagini from "@/components/Riquadro_Immagini";
import Navbar from "@/components/Riquadro_Navbar";
import Esperienze from "@/components/Riquadro_Esperienze";
import Sezione_Progetti from "@/components/Sezione_progetti";
import Sezione_Chi_sono from "@/components/Sezione_Chi_sono";
import Sezione_Esperienze from "@/components/Sezione_Esperienze";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let cursore = document.getElementById("cursore");

    const ingrandisci_cerchio = () => {
      cursore.classList.add("w-10"); 
      cursore.classList.add("h-10"); 

    };

    const riduci_cerchio = () => {
      cursore.classList.remove("w-10");
      cursore.classList.remove("h-10");
    };

    const lista_bottoni = document.querySelectorAll(".nav-option");

    lista_bottoni.forEach((bottone) => {
      bottone.addEventListener("mouseenter", ingrandisci_cerchio);
      bottone.addEventListener("mouseleave", riduci_cerchio);
    });

    window.addEventListener("mousemove", function (evento) {
      let x = evento.clientX;
      let y = evento.clientY;
      cursore.style.left = x + "px";
      cursore.style.top = y + "px";
    });
  }, []);

  const [sezione_da_mostrare, imposta_sezione] = useState("chi_sono");

  const sezione_selezionata = () => {
    if (sezione_da_mostrare == "chi_sono") {
      return <Sezione_Chi_sono />;
    } else if (sezione_da_mostrare == "progetti") {
      return <Sezione_Progetti />;
    } else if (sezione_da_mostrare == "esperienze") {
      return <Sezione_Esperienze />;
    }
  };

  return (
    <div>
      <div
        id="cursore"
        className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-50 cerchio transition-[width,height] duration-200 ease-out outline-2 outline-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div className="mt-15 ml-15 flex justify-start ">
        <IO />
        <Immagini />
      </div>
      <br></br>
      <div className="grid grid-cols-1 mt-5 ml-15">
        <Navbar bordoFisso={sezione_da_mostrare} onSelect={imposta_sezione} />
        {sezione_selezionata()}
      </div>
    </div>
  );
}
