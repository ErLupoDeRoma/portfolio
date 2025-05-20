export default function Navbar({onSelect, bordoFisso}) {
  return (
    <>
      
      <div id="generale" className="mt-5 flex flex-row justify-around w-125 h-7">
        <button onClick={() => onSelect('chi_sono')} id="chi_sono" className={bordoFisso === 'chi_sono'? 'border border-white px-6 rounded-lg transition nav-option':'px-6 rounded-lg transition nav-option'}>
          Chi sono
        </button>
        <button onClick={() => onSelect('esperienze')} id="chi_sono" className={bordoFisso === 'esperienze'? 'border border-white px-6 rounded-lg transition nav-option':'px-6 rounded-lg transition nav-option'}>
          Esperienze
        </button>
        <button onClick={() => onSelect('progetti')} id="chi_sono" className={bordoFisso === 'progetti'? 'border border-white px-6 rounded-lg transition nav-option':'px-6 rounded-lg transition nav-option'}>
          Progetti
        </button>
      </div>
    </>
  );
}
