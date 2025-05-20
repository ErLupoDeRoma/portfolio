import Navigazione from "./Riquadro_Navigazione";
import Progetto from "./Riquadro_Progetto";

export default function Progetti() {
  return (
    <>
      <div className=" flex justify-start">
        <Navigazione />
        <Progetto />
      </div>
    </>
  );
}
