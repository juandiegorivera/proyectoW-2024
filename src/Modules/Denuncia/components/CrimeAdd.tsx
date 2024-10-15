import React from "react";
import CrimeForm from "src/Modules/Denuncia/components/CrimeForm";
import useCrimen from "src/Modules/Denuncia/hooks/hookcrimen";

const CrimenAdd: React.FC = () => {
  // Utilizamos el hook useCrimen para manejar los estados y funciones del formulario
  const {
    tipoDeRobo,
    setTipoDeRobo,
    detalles,
    setDetalles,
    ubicacion,
    setUbicacion,
    handleSubmit,
  } = useCrimen();

  return (
    <div>
      <h1>Registro de Crimen</h1>
      {/* Renderizamos el formulario CrimeForm, pasando las props necesarias desde el hook */}
      <CrimeForm
        tipoDeRobo={tipoDeRobo}
        setTipoDeRobo={setTipoDeRobo}
        detalles={detalles}
        setDetalles={setDetalles}
        ubicacion={ubicacion}
        setUbicacion={setUbicacion}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CrimenAdd;