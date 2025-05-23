export default function Template_Esperienze({ Esperienza }) {
  return (
    <>
      <div className="md:ml-10 rounded-lg flex justify-start border border-white md:flex-row flex-col">
        <div className="w-5/5">
          <div className="mt-5 ml-5 text-2xl font-semibold">{Esperienza.Titolo}</div>
          <div className="mt-2 ml-5 text-lg">
        {Esperienza.Testo}
          </div>
        </div>

        <div className="m-5 flex justify-center items-center">
          <img src={Esperienza.Immagine}
          className="rounded-lg border border-white"/>
        </div>
      </div>
    </>
  );
}
