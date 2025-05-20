import Riquadro_Navigazione_Progetti from "./Riquadro_Navigazione_Progetti";
import { useState } from "react";
import Template_Progetto from "./Template_Progetto";

export default function Sezione_Progetti() {
  const Progetto1 = {
    Titolo: "Progetto 1",
    Testo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi" +
      "ultrices posuere nibh, nec dictum nisi lobortis ac. Donec aliquet," +
      "tortor et pellentesque malesuada, ex lorem auctor turpis, non" +
      "sagittis mauris ante nec nulla. Aenean ut ipsum at orci laoreet" +
      "consectetur. Donec pulvinar dignissim finibus. Praesent pharetra" +
      "vulputate erat, a feugiat felis pharetra eget. Lorem ipsum dolor sit" +
      "amet, consectetur adipiscing elit. Mauris nulla arcu, bibendum non" +
      "lobortis vitae, viverra nec tellus. Curabitur fringilla, enim non" +
      "tristique molestie, augue nisl ultricies libero, at suscipit felis" +
      "lacus ut nibh. Nam placerat nisl a risus imperdiet, vitae mattis" +
      "justo pretium. Sed lorem tellus, sollicitudin eget ligula nec," +
      "pulvinar accumsan libero. Sed accumsan fringilla eros, sed fermentum" +
      "erat porttitor ut.",
    Immagine: "/images/Prodotto 1.png",
  };

  const Progetto2 = {
    Titolo: "Progetto 2",
    Testo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi" +
      "ultrices posuere nibh, nec dictum nisi lobortis ac. Donec aliquet," +
      "tortor et pellentesque malesuada, ex lorem auctor turpis, non" +
      "sagittis mauris ante nec nulla. Aenean ut ipsum at orci laoreet" +
      "consectetur. Donec pulvinar dignissim finibus. Praesent pharetra" +
      "vulputate erat, a feugiat felis pharetra eget. Lorem ipsum dolor sit" +
      "amet, consectetur adipiscing elit. Mauris nulla arcu, bibendum non" +
      "lobortis vitae, viverra nec tellus. Curabitur fringilla, enim non" +
      "tristique molestie, augue nisl ultricies libero, at suscipit felis" +
      "lacus ut nibh. Nam placerat nisl a risus imperdiet, vitae mattis" +
      "justo pretium. Sed lorem tellus, sollicitudin eget ligula nec," +
      "pulvinar accumsan libero. Sed accumsan fringilla eros, sed fermentum" +
      "erat porttitor ut.",
    Immagine: "/images/Prodotto 2.png",
  };

  const [progetto_da_mostrare, imposta_progetto] = useState("progetto1");
  const progetto_selezionato = () => {
    if (progetto_da_mostrare == "progetto1") {
      return Progetto1;
    } else if (progetto_da_mostrare == "progetto2") {
      return Progetto2;
    }
  };

  return (
    <>
      <div className=" flex justify-start">
        <Riquadro_Navigazione_Progetti onSelect={imposta_progetto} />
        <Template_Progetto Progetto={progetto_selezionato()} />
      </div>
    </>
  );
}
