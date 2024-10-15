import { useState } from "react";
import { db } from '../FirebaseConfig';
import { collection, addDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';

const useCrimen = () => {
  // Inicializamos los estados
  const [tipoDeRobo, setTipoDeRobo] = useState("");
  const [detalles, setDetalles] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  // Función para manejar el envío de nuevos crímenes
  const handleSubmit = async (tipoDeRobo: string, detalles: string, ubicacion: string) => {
    const nuevoCrimen = {
      tipoDeRobo,
      detalles,
      ubicacion,
      created_at: serverTimestamp(), // Usar serverTimestamp directamente
    };

    try {
      // Agregamos el nuevo crimen a la colección de Firestore
      await addDoc(collection(db, "crimenes"), nuevoCrimen); // Cambiar a addDoc y collection
      alert("Crimen registrado exitosamente");

      // Reseteamos los campos después de agregar el crimen
      setTipoDeRobo("");
      setDetalles("");
      setUbicacion("");
    } catch (error) {
      console.error("Error al registrar el crimen: ", error);
    }
  };

  // Función para manejar la actualización de un crimen
  const handleUpdate = async (id: string, e: React.FormEvent) => {
    e.preventDefault();

    const crimenActualizado = {
      tipoDeRobo,
      detalles,
      ubicacion,
      updated_at: serverTimestamp(), // Usar serverTimestamp directamente
    };

    try {
      // Actualizamos el crimen en Firestore usando el ID del documento
      await updateDoc(doc(db, "crimenes", id), crimenActualizado); // Cambiar a updateDoc y doc
      alert("Crimen actualizado exitosamente");

      // Reseteamos los campos después de actualizar el crimen
      setTipoDeRobo("");
      setDetalles("");
      setUbicacion("");
    } catch (error) {
      console.error("Error al actualizar el crimen: ", error);
    }
  };

  // Retornamos los estados y funciones para ser usados en otros componentes
  return {
    tipoDeRobo,
    setTipoDeRobo,
    detalles,
    setDetalles,
    ubicacion,
    setUbicacion,
    handleSubmit,
    handleUpdate,
  };
};

export default useCrimen;