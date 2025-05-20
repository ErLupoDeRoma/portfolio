import Riquadro_Esperienze from "./Riquadro_Esperienze";
import Riquadro_Navigazione_Esperienze from "./Riquadro_Navigazione_Esperienze";
import Progetto from "./Riquadro_Progetto";

export default function Sezione_Esperienze() {
  return (
    <>
      <div className=" flex justify-start">
        <Riquadro_Navigazione_Esperienze/>
        <Riquadro_Esperienze />
      </div>
    </>
  );
}
