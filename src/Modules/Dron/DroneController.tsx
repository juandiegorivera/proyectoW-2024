// Importamos las bibliotecas necesarias
import React, { useState, useCallback } from 'react';  // React y hooks para manejo de estado y memorización
import axios from 'axios';                            // Cliente HTTP para realizar peticiones al backend

// Definimos el componente funcional DroneController
const DroneController: React.FC = () => {
    // Estado para controlar si el dron está conectado (true/false)
    const [isConnected, setIsConnected] = useState(false);    
    
    // Estado para almacenar mensajes de error (string o null)
    const [error, setError] = useState<string | null>(null);  
    
    // Estado para mostrar indicadores de carga durante operaciones
    const [isLoading, setIsLoading] = useState(false);        

    // Función memorizada para conectar el dron
    const connectDrone = useCallback(async () => {
        try {
            setIsLoading(true);                              // Inicia el estado de carga
            setError(null);                                  // Limpia cualquier error previo
            
            // Realiza petición POST al endpoint de conexión
            const response = await axios.post('http://localhost:5000/api/connect');  
            
            // Actualiza el estado de conexión según la respuesta
            setIsConnected(response.data.connected);         
        } catch (err) {
            setError('Error conectando con el dron');        // Establece mensaje de error
            setIsConnected(false);                          // Asegura que el dron aparezca desconectado
        } finally {
            setIsLoading(false);                            // Finaliza el estado de carga
        }
    }, []);  // Array vacío indica que la función no tiene dependencias

    // Función memorizada para iniciar el despegue
    const handleTakeoff = useCallback(async () => {
        // Verifica que el dron esté conectado antes de intentar despegar
        if (!isConnected) {                                 
            setError('El dron debe estar conectado para despegar');
            return;
        }

        try {
            setIsLoading(true);                            // Inicia el estado de carga
            setError(null);                                // Limpia cualquier error previo
            
            // Realiza petición POST al endpoint de despegue
            await axios.post('http://localhost:5000/api/takeoff');  
        } catch (err) {
            setError('Error durante el despegue');         // Establece mensaje de error
        } finally {
            setIsLoading(false);                          // Finaliza el estado de carga
        }
    }, [isConnected]);  // Dependencia del estado de conexión

    // Renderiza la interfaz de usuario
    return (
        // Contenedor principal con padding
        <div className="p-4">
            // Título del componente
            <h2 className="text-2xl mb-4">Control del Dron</h2>
            
            // Contenedor de botones con espaciado vertical
            <div className="space-y-4">
                {/* Botón para conectar el dron */}
                <button 
                    onClick={connectDrone}                   // Manejador del evento click
                    className="bg-blue-500 text-white px-4 py-2 rounded"  // Estilos Tailwind
                >
                    Conectar Dron
                </button>
                
                {/* Botón de despegue - solo visible si el dron está conectado */}
                {isConnected && (
                    <button 
                        onClick={handleTakeoff}             // Manejador del evento click
                        className="bg-green-500 text-white px-4 py-2 rounded"  // Estilos Tailwind
                    >
                        Despegar
                    </button>
                )}

                {/* Muestra mensaje de error si existe */}
                {error && (
                    <div className="text-red-500">         // Texto en rojo para errores
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default DroneController;