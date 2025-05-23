export default function Immagini() {
  return (
    <>
      <div id="generale" className="flex md:justify-end justify-around pt-10 md:pt-0 items-center md:items-start">
        <div id="logo">
          <img src="/images/Logo5.png" className="w-40 transition-transform duration-10000 hover:rotate-3600"></img>
        </div>
        <div id="foto">
          <img src="/images/Quadrato.jpg" className="w-60 rounded-lg border border-white"></img>
        </div>
      </div>
    </>
  );
}
