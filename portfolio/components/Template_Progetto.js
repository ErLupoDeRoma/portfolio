export default function Template_Progetto({ Progetto }) {
  return (
    <>
      <div className="mt-5 ml-10 w-370 h-120 rounded-lg  flex justify-start border border-white">
        <div className="w-5/5">
          <div className="mt-5 ml-5 text-2xl font-semibold">{Progetto.Titolo}</div>
          <div className="mt-2 ml-5 text-lg">
        {Progetto.Testo}
          </div>
        </div>

        <div className="m-5 flex justify-center items-center">
          <img src={Progetto.Immagine}
          width="1800px"
          height="600px" 
          className="rounded-lg border border-white"/>
        </div>
      </div>
    </>
  );
}
