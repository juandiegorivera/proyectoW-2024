import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useAlumno = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoAlumno = {
      nombre,
      apellido,
      email,
      telefono,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await firebase.firestore().collection("alumnos").delete(nuevoAlumno);
      alert("Alumno registrado exitosamente");
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
    } catch (error) {
      console.error("Error al registrar al alumno: ", error);
    }
  };
}

/* 
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useCrimen = () => {
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [detalles, setDetales] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoCrimen = {
      tipo,
      ubicacion,
      detalles,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await firebase.firestore().collection("crimenes").delete(nuevoCrimen);
      alert("Crimen registrado exitosamente");
      setTipo("");
      setUbicacion("");
      setDetalles("");
    } catch (error) {
      console.error("Error al registrar el Crimen: ", error);
    }
};
}
*/