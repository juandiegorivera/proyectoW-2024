import { useState } from "react";
import { db } from '../../../FirebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const useRegistro = () => {
  // Inicializamos los estados
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el envío de nuevos registros
  const handleSubmit = async (username: string, email: string, password: string) => {
    const nuevoRegistro = {
      username,
      email,
      password,
      created_at: serverTimestamp(), // Usar serverTimestamp directamente
    };

    try {
      // Agregamos el nuevo registro a la colección de Firestore
      await addDoc(collection(db, "registros"), nuevoRegistro); // Cambiar a addDoc y collection
      alert("Registro exitoso");

      // Reseteamos los campos después de agregar el registro
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error al registrar el usuario: ", error);
    }
  };

  // Retornamos los estados y funciones para ser usados en otros componentes
  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
};

export default useRegistro;
