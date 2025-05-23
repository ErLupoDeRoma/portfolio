import { useState, useEffect } from "react";

export default function IO() {
  
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
    <>
      <div
        id="generale"
        className=" flex justify-start rounded-lg border border-white flex-col md:flex-row items-center md:w-170 md:justify-around"
      >
        <div id="nome" className=" px-5 text-5xl">
          Luca
          <br />
          Rivoli
        </div>
        <div id="info" className="flex py-5 md:py-10 text-md md:text-lg">
          <ul>
            <li><b>E-Mail:</b> l.rivoli@sandonadipiave.it</li>
            <li><b>Numero di telefono:</b> +39 820 992 6628</li>
            <li><b>GitHub:</b>&nbsp;
              <a className="cursor" href="https://github.com/ErLupoDeRoma"> 
                github.com/ErLupoDeRoma
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
