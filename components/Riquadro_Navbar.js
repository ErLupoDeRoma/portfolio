export default function Navbar({ onSelect, bordoFisso }) {
  return (
    <>
      <div id="generale" className="flex flex-row justify-around md:justify-start pb-5">
        <button
          onClick={() => onSelect("chi_sono")}
          id="chi_sono"
          className={
            bordoFisso === "chi_sono"
              ? "border border-white border-2 px-6 rounded-lg transition nav-option cursor text-sm md:text-lg md:mr-20"
              : "px-6 rounded-lg transition nav-option cursor text-sm md:text-lg md:mr-20"
          }
        >
          Chi sono
        </button>
        <button
          onClick={() => onSelect("esperienze")}
          id="chi_sono"
          className={
            bordoFisso === "esperienze"
              ? "border border-white border-2 px-6 rounded-lg transition nav-option cursor text-sm md:text-lg md:mr-20"
              : "px-6 rounded-lg transition nav-option cursor text-sm md:text-lg md:mr-20"
          }
        >
          Esperienze
        </button>
        <button
          onClick={() => onSelect("progetti")}
          id="chi_sono"
          className={
            bordoFisso === "progetti"
              ? "border border-white border-2 px-6 rounded-lg transition nav-option cursor text-sm md:text-lg md:mr-20"
              : "px-6 rounded-lg transition nav-option cursor text-sm md:text-lg md:mr-20"
          }
        >
          Progetti
        </button>
      </div>
    </>
  );
}
