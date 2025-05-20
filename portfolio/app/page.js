import IO from "@/components/Riquadro_Io";
import Immagini from "@/components/Riquadro_Immagini";
import Navbar from "@/components/Riquadro_Navbar";
import Progetti from "@/components/Sezione_progetti";
import Chi_sono from "@/components/Sezione_Chi_sono";

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
        <Chi_sono/>
      </div>
    </div>
  );
}
