"use client";
import IO from "@/components/Riquadro_Io";
import Immagini from "@/components/Riquadro_Immagini";
import Navbar from "@/components/Riquadro_Navbar";
import Esperienze from "@/components/Riquadro_Esperienze";
import Sezione_Progetti from "@/components/Sezione_progetti";
import Sezione_Chi_sono from "@/components/Sezione_Chi_sono";
import Sezione_Esperienze from "@/components/Sezione_Esperienze";
import { useState } from "react";

export default function Home() {
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
      <div className="mt-15 ml-15 flex justify-start ">
        <IO />
        <Immagini />
      </div>
      <br></br>
      <div className="grid grid-cols-1 mt-5 ml-15">
        <Navbar onSelect={imposta_sezione} />
        {sezione_selezionata()}
      </div>
    </div>
  );
}
