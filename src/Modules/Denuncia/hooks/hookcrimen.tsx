import { useState } from "react";
import { db } from 'src/Modules/Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const useCrimen = () => {
  const [tipoDeRobo, setTipoDeRobo] = useState("");
  const [detalles, setDetalles] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const handleSubmit = async (tipoDeRobo: string, detalles: string, ubicacion: string) => {
    const nuevoCrimen = {
      tipoDeRobo,
      detalles,
      ubicacion,
      created_at: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "Crimen"), nuevoCrimen);
      alert("Crimen registrado exitosamente");
      setTipoDeRobo("");
      setDetalles("");
      setUbicacion("");
    } catch (error) {
      console.error("Error al registrar el crimen: ", error);
    }
  };

  return {
    tipoDeRobo,
    setTipoDeRobo,
    detalles,
    setDetalles,
    ubicacion,
    setUbicacion,
    handleSubmit,
  };
};

export default useCrimen;


