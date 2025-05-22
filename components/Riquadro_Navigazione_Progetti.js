
import { useState, useEffect } from "react";

export default function Riquadro_Navigazione_Progetti({
  onSelect,
  bordoFisso,
}) {

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


  return (
    <>
      <div
        id="generale"
        className="mt-5 flex flex-col w-50 h-120 rounded-lg border border-white"
      >
        <div
          id="progetti"
          className="mt-5 pb-5 text-2xl text-center font-semibold"
        >
          Progetti
        </div>

        <button
          onClick={() => onSelect("progetto1")}
          id="progetto_1"
          className={
            bordoFisso === "progetto1"
              ? "border border-white mt-2 text-lg text-center nav-option mx-10 rounded-lg"
              : "mt-2 text-lg text-center nav-option mx-10 rounded-lg"
          }
        >
          Progetto 1
        </button>

        <button
          onClick={() => onSelect("progetto2")}
          id="progetto_2"
          className={
            bordoFisso === "progetto2"
              ? "border border-white mt-2 text-lg text-center nav-option mx-10 rounded-lg"
              : "mt-2 text-lg text-center nav-option mx-10 rounded-lg"
          }
        >
          Progetto 2
        </button>
      </div>
    </>
  );
}
