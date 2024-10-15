import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export interface RoboFormProps {
  tipoDeRobo: string;
  setTipoDeRobo: React.Dispatch<React.SetStateAction<string>>;
  detalles: string;
  setDetalles: React.Dispatch<React.SetStateAction<string>>;
  ubicacion: string;
  setUbicacion: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (tipoDeRobo: string, detalles: string, ubicacion: string) => Promise<void>;
}

const RoboForm: React.FC<RoboFormProps> = ({ handleSubmit }) => {
  const [tipoDeRobo, setTipoDeRobo] = useState("");
  const [detalles, setDetalles] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const onSubmit = () => {
    handleSubmit(tipoDeRobo, detalles, ubicacion); // Asegúrate de que esto coincida con la nueva firma
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Tipo de Robo:</Text>
        <TextInput
          style={styles.input}
          value={tipoDeRobo}
          onChangeText={setTipoDeRobo}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Detalles:</Text>
        <TextInput
          style={styles.inputDetalles}
          value={detalles}
          onChangeText={setDetalles}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Ubicación:</Text>
        <TextInput
          style={styles.input}
          value={ubicacion}
          onChangeText={setUbicacion}
        />
      </View>
      <Button title="Enviar" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 24,
    backgroundColor: '#1E1E2E',
    borderRadius: 12,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#E0E0E0',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3A3A50',
    backgroundColor: '#2A2A3A',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  inputDetalles: {
    borderWidth: 1,
    borderColor: '#3A3A50',
    backgroundColor: '#2A2A3A',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#FFFFFF',
    height: 100,
  },
});

export default RoboForm;