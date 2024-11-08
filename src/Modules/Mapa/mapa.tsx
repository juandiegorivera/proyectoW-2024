import React, { useState } from 'react';
"use client"; // se utiliza en proyectos de Next.js para especificar que este archivo debe ser renderizado en el lado del cliente.

import {
  APIProvider,     // Proveedor de la API de Google Maps.
  Map,             // Componente para renderizar el Mapa.
  AdvancedMarker,  // Marcador avanzado que se puede personalizar.
  Pin,             // Pin es un componente visual que se utiliza dentro del marcador.
  InfoWindow,      // Ventana de información que aparece cuando se interactúa con el marcador.
} from "@vis.gl/react-google-maps";



interface MapaProps {
  children: React.ReactNode; // Añadido para aceptar children
}

export const Mapeishon: React.FC<MapaProps> = ({ children }) => {
  // Definimos la posición geográfica (latitud y longitud) para centrar el Mapa en Neuquén.
  const position = { lat: -38.950557 , lng: -68.059219 };

  // Estado para controlar la visibilidad de la ventana de información (InfoWindow).
  const [open, setOpen] = useState(false);

  // Estado para controlar el nivel de zoom del Mapa.
  const [zoom, setZoom] = useState(13);

  // Función para aumentar el nivel de zoom.
  const handleZoomIn = () => {
    if (zoom < 1000) setZoom(zoom + 1); // El nivel máximo de zoom es 21.
  };

  // Función para disminuir el nivel de zoom.
  const handleZoomOut = () => {
    if (zoom > -100) setZoom(zoom - 1); // El nivel mínimo de zoom es 0.
  };

  return (
    <APIProvider apiKey="AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM">
      {/* Contenedor que abarca todo el espacio disponible en la pantalla para el Mapa */}
      <div style={{ height: "100vh", width: "100%" }}>
        <Map 
        zoom={zoom}  
        mapId={ 55eb5b901c013014 }>
          {/* AdvancedMarker permite definir un marcador personalizado en el Mapa */}
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"red"}    // Color de fondo del pin
              borderColor={"green"}  // Color del borde del pin
              glyphColor={"purple"}  // Color del icono o texto dentro del pin
            />
          </AdvancedMarker>
          
          {/* InfoWindow se muestra cuando 'open' es verdadero, al hacer clic en el marcador */}
          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>I'm in Neuquén -saquenme de acá-</p> {/* Mensaje mostrado en la ventana */}
            </InfoWindow>
          )}
          {children} {/* Renderiza los children dentro del contenedor del mapa */}
        </Map>
        
        {/* Controles de Zoom */}
        <div style={{ position: 'relative', bottom: 25, left: 10 }}>
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      </div>
    </APIProvider>
  );
};

export default Mapeishon;

