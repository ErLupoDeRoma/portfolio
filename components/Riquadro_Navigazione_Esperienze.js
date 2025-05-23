import { useState, useEffect } from "react";

export default function Riquadro_Navigazione_Esperienze({
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

    const lista_bottoni = document.querySelectorAll(".cursor");

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
        className="mt-5 flex md:h-full flex-col rounded-lg border border-white px-5 pb-3"
      >
        <div
          id="progetti"
          className="mt-5 pb-5 text-2xl text-center font-semibold"
        >
          Esperienze
        </div>

        <button
          onClick={() => onSelect("esperienza1")}
          id="esperienza_1"
          className={
            bordoFisso === "esperienza1"
              ? "border border-white mt-2 text-lg text-center nav-option px-2 rounded-lg cursor"
              : "mt-2 text-lg text-center nav-option px-2 rounded-lg cursor"
          }
        >
          Esperienza 1
        </button>

        <button
          onClick={() => onSelect("esperienza2")}
          id="esperienza_2"
          className={
            bordoFisso === "esperienza2"
              ? "border border-white mt-2 text-lg text-center nav-option px-2 rounded-lg cursor"
              : "mt-2 text-lg text-center nav-option px-2 rounded-lg cursor"
          }
        >
          Esperienza 2
        </button>
      </div>
    </>
  );
}
