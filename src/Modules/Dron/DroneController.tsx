// Importamos las bibliotecas necesarias
import React, { useState } from 'react';                    // React y hook para manejar estado
import { View, TouchableOpacity, Text } from 'react-native'; // Componentes básicos de React Native
import axios from 'axios';                                  // Cliente HTTP para llamadas al API

// Definimos el componente como una función de tipo React.FC (Functional Component)
const DroneController: React.FC = () => {
    // Creamos un estado booleano para controlar si el dron está encendido
    // isOn: variable del estado
    // setIsOn: función para actualizar el estado
    const [isOn, setIsOn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Función que se ejecuta cuando se presiona el botón
    const toggleDrone = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/connect');
            if (response.data.status === 'connected' || response.data.status === 'disconnected') {
                setIsOn(response.data.status === 'connected');
                setError(null);
            }
        } catch (error) {
            // Si hay un error, lo mostramos en la consola
            console.error('Error al conectar el dron');
            setError('Error al conectar con el dron');
        }
    };

    // Renderizamos la interfaz del componente
    return (
        // View es el contenedor principal (equivalente a div en web)
        <View style={{ padding: 16 }}>
            {/* TouchableOpacity es un botón con efecto de opacidad al tocarlo */}
            <TouchableOpacity 
                onPress={toggleDrone}    // Función que se ejecuta al presionar
                style={{ 
                    backgroundColor: isOn ? '#22c55e' : '#3b82f6', // Verde si está encendido, azul si está apagado
                    padding: 8,
                    borderRadius: 4
                }}
            >
                {/* Texto del botón que cambia según el estado */}
                <Text style={{ color: 'white' }}>
                    {isOn ? 'Apagar Dron' : 'Encender Dron'}
                </Text>
            </TouchableOpacity>
            {error && (
                <Text style={{ color: 'red', marginTop: 8 }}>{error}</Text>
            )}
        </View>
    );
};

// Exportamos el componente para poder usarlo en otras partes de la aplicación
export default DroneController;