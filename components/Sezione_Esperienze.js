import Riquadro_Navigazione_Esperienze from "./Riquadro_Navigazione_Esperienze";
import Template_Esperienze from "./Template_Esperienze";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Sezione_Esperienze() {
  const esperienza1 = {
    Titolo: "Esperienza 1",
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
    Immagine: "/images/Venistar.webp",
  };

  const esperienza2 = {
    Titolo: "Esperienza 2",
    Testo:
      "Morbi molestie ac nisi eget tincidunt. Suspendisse dapibus varius mauris eget volutpat." +
      "Nulla interdum est quis sapien pellentesque, ac consequat elit porttitor. Pellentesque habit" +
      "ant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque" +
      "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vehicula, metus" +
      "a cursus vulputate, ex tortor commodo neque, vel molestie nisl lacus at urna. Duis" +
      "maximus tortor rutrum, laoreet nulla ut, ultrices elit. Phasellus a dui dolor." +
      "Nullam tempus, neque id venenatis accumsan, augue lectus rutrum nulla, eget" +
      "aliquam tortor neque nec est. Donec pretium turpis non magna finibus efficitur." +
      "Aenean elementum nunc eu erat aliquet cursus. Fusce eu ante" +
      "turpis. In eget facilisis justo.",
    Immagine: "/images/Prodotto 2.png",
  };

  const [esperienza_da_mostrare, imposta_esperienza] = useState("esperienza1");
  var id_selezionato = 1;
  const esperienza_selezionata = () => {
    if (esperienza_da_mostrare == "esperienza1") {
      id_selezionato = 1;
      return esperienza1;
    } else if (esperienza_da_mostrare == "esperienza2") {
      id_selezionato = 2;
      return esperienza2;
    }
  };

  return (
    <>
      <div className=" flex flex-col md:flex-row md:h-100 justify-between">
        <div>
          <Riquadro_Navigazione_Esperienze
            bordoFisso={esperienza_da_mostrare}
            onSelect={imposta_esperienza}
          />
        </div>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={id_selezionato}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Template_Esperienze Esperienza={esperienza_selezionata()} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
