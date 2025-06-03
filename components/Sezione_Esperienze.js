import Riquadro_Navigazione_Esperienze from "./Riquadro_Navigazione_Esperienze";
import Template_Esperienze from "./Template_Esperienze";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Sezione_Esperienze({ esperienza_da_mostrare }) {
  const Esperienza1 = {
    Titoli: [
      "Omni-Man",
      "Invincible",
      "Immortal",
      "Allen the Alien",
      
    ],
    
    Testi: [
      "Omni-Man è un potente supereroe alieno proveniente dal pianeta Viltrum. "+
      "Padre di Invincible, si presenta inizialmente come protettore della Terra. "+
      "In realtà ha una missione segreta legata alla conquista del pianeta. "+
      "Il suo personaggio è complesso e pieno di contrasti morali.",
       
      
      "Invincible, è un giovane supereroe metà umano e metà alieno. "+
       "Figlio del potente Omni-Man, scopre i suoi poteri da adolescente. "+
       "Cerca di proteggere il mondo affrontando minacce sempre più grandi. "+
       "La sua storia è segnata da conflitti interiori e dure scelte morali.",


      "Immortal è un supereroe antico e resistente, "+
      "capace di vivere per secoli grazie ai suoi poteri rigenerativi. "+
      "È stato un leader dei Guardiani del Globo. "+
      "Ha combattuto molte battaglie nella storia dell'umanità. "+
      "Nonostante le perdite, continua a lottare per la giustizia.",


      "Allen l'Alieno è un emissario della Coalizione dei Pianeti, "+
      "forte e resistente, con un carattere leale e determinato. "+
      "Incontra Invincible durante una missione e diventa suo amico. "+
      "È impegnato nella lotta contro l'impero Viltrumita. ",


      
      
    ],
    Immagini: [
      "/images/Omni-man.png",
      "/images/Invincible.png",
      "/images/Immortal.png",
      "/images/Allen the Alien.png",
      
      
    ]
    
  };

  const Esperienza2 = {
    Titoli: [
      
    ],
    
    Testi: [
      
      
    ],
    Immagini: [
      "/images/Invincible.png",
      "/images/Invincible 1.png",
      "/images/Invincible 2.png",
      "/images/Invincible 3.png",
      "/images/Invincible 4.png",
      "/images/Invincible 5.png",
      
    ]
    
  };

  

  /*   const [esperienza_da_mostrare, imposta_esperienza] = useState("esperienza1");
   */ var id_selezionato = 1;
  const esperienza_selezionata = () => {
    if (esperienza_da_mostrare == "esperienza1") {
      id_selezionato = 1;
      return Esperienza1;
    } else if (esperienza_da_mostrare == "esperienza2") {
      id_selezionato = 2;
      return Esperienza2;
    }
  
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between h-full">
        <div  className="contenitore-carosello">
          <AnimatePresence mode="wait" className="h-full">
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
