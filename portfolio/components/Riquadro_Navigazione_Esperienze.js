export default function Riquadro_Navigazione_Esperienze({
  onSelect,
  bordoFisso,
}) {
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
          Esperienze
        </div>

        <button
          onClick={() => onSelect("esperienza1")}
          id="esperienza_1"
          className={
            bordoFisso === "esperienza1"
              ? "border border-white mt-2 text-lg text-center nav-option mx-10 rounded-lg"
              : "mt-2 text-lg text-center nav-option mx-10 rounded-lg"
          }
        >
          Esperienza 1
        </button>
        
        <button
          onClick={() => onSelect("esperienza2")}
          id="esperienza_2"
          className={
            bordoFisso === "esperienza2"
              ? "border border-white mt-2 text-lg text-center nav-option mx-10 rounded-lg"
              : "mt-2 text-lg text-center nav-option mx-10 rounded-lg"
          }
        >
          Esperienza 2
        </button>
      </div>
    </>
  );
}
