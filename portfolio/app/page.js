import Image from "next/image";
import IO from "@/components/Riquadro_Io";
import Immagini from "@/components/Riquadro_Immagini";
import Navbar from "@/components/Riquadro_Navbar";
import Navigazione from "@/components/Riquadro_Navigazione";
import Progetto from "@/components/Riquadro_Progetto";

export default function Home() {
  return (
    <div>
      <div className="mt-15 ml-15 flex justify-start ">
        <IO />
        <Immagini />
      </div>
      <br></br>
      <div className="grid grid-cols-1 mt-5 ml-15">
        <Navbar />
        <div className="flex justify-start">
          <Navigazione />
          <Progetto />
        </div>
      </div>
    </div>
  );
}
