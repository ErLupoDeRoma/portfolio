

export default function Riquadro_Navigazione_Progetti({onSelect}) {
  return (
    <>
      <div
        id="generale"
        className="mt-5 flex flex-col w-50 h-120 rounded-lg border border-white"
      >
        <div
          id="progetti"
          className="mt-5 pb-5 text-2xl text-center font-semibold"
        >
          Progetti
        </div>

        <button onClick={() => onSelect('progetto1')} >
          <li id="progetto_1" className="mt-2 mr-5 text-lg text-center">
            Progetto 1
          </li>
        </button>

        <button onClick={() => onSelect('progetto2')}>
          <li id="progetto_2" className="mt-2 mr-5 text-lg text-center">
            Progetto 2
          </li>
        </button>
      </div>
    </>
  );
}
