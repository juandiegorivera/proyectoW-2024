import React, { useState, useCallback } from 'react';
import axios from 'axios'; 

/*
 * Componente DroneController
 * Maneja la interfaz de usuario para controlar un dron
 * Permite conectar el dron y realizar operaciones básicas como el despegue
 */
const DroneController: React.FC = () => {
    // Estado para el control de la conexión y errores
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Función para manejar la conexión del dron
    const connectDrone = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await axios.post('http://localhost:5000/api/connect');
            setIsConnected(response.data.connected);
        } catch (err) {
            setError('Error conectando con el dron');
            setIsConnected(false);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Función para manejar el despegue del dron
    const handleTakeoff = useCallback(async () => {
        if (!isConnected) {
            setError('El dron debe estar conectado para despegar');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            await axios.post('http://localhost:5000/api/takeoff');
        } catch (err) {
            setError('Error durante el despegue');
        } finally {
            setIsLoading(false);
        }
    }, [isConnected]);

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Control del Dron</h2>
            <div className="space-y-4">
                <button 
                    onClick={connectDrone}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Conectar Dron
                </button>
                
                {isConnected && (
                    <button 
                        onClick={handleTakeoff}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Despegar
                    </button>
                )}

                {error && (
                    <div className="text-red-500">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DroneController;










// ... implementacion en App.tsx ...
//import DroneController from './src/Modules/DroneModule/DroneController';

//function App() {
//    return (
//        // ... existing code ...
//        <DroneController />
//        // ... existing code ...
//    );
//}