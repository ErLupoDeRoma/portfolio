import Image from "next/image";
import IO from "@/components/Riquadro_Io";
import Immagini from "@/components/Riquadro_Immagini";
import Navbar from "@/components/Riquadro_Navbar";
import Navigazione from "@/components/Riquadro_Navigazione";
import Progetto from "@/components/Riquadro_Progetto";

export default function Home() {
  return (
   
<div>
  <div className="flex justify-around grid grid-cols-2">
  <IO/>
<Immagini/>
</div>
<br></br>
<div className="flex justify-around grid grid-cols-1">  
  <Navbar/>
<div className="grid grid-cols-2">
  <Navigazione/>
  <Progetto/></div>
</div>
</div>

  );
}
