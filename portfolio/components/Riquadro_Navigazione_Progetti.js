

export default function Riquadro_Navigazione_Progetti({onSelect, bordoFisso}) {
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

        <button onClick={() => onSelect('progetto1')}
           id="progetto_1" className={bordoFisso === 'progetto1'? 'border border-white mt-2 text-lg text-center nav-option mx-10 rounded-lg':'mt-2 text-lg text-center nav-option mx-10 rounded-lg'}>
            Progetto 1
          
        </button>

        <button onClick={() => onSelect('progetto2')}
           id="progetto_2" className={bordoFisso === 'progetto2'? 'border border-white mt-2 text-lg text-center nav-option mx-10 rounded-lg':'mt-2 text-lg text-center nav-option mx-10 rounded-lg'}>
            Progetto 2
          
        </button>
      </div>
    </>
  );
}
