import Riquadro_Navigazione_Progetti from "./Riquadro_Navigazione_Progetti";
import Template_Progetto from "./Template_Progetto";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

  const [progetto_da_mostrare, imposta_progetto] = useState("progetto1");
  var id_selezionato = 1;
  const progetto_selezionato = () => {
    if (progetto_da_mostrare == "progetto1") {
      id_selezionato = 1;
      return Progetto1;
    } else if (progetto_da_mostrare == "progetto2") {
      id_selezionato = 2;
      return Progetto2;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between h-full">
        <Riquadro_Navigazione_Progetti
          bordoFisso={progetto_da_mostrare}
          onSelect={imposta_progetto}
        />
        <div>
          <AnimatePresence mode="wait" className="h-full ">
            <motion.div
              key={id_selezionato}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Template_Progetto Progetto={progetto_selezionato()} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
