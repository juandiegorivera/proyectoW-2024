import React, { useState } from 'react';
"use client"; // se utiliza en proyectos de Next.js para especificar que este archivo debe ser renderizado en el lado del cliente.

import {
  APIProvider,     // Proveedor de la API de Google Maps.
  Map,             // Componente para renderizar el Mapa.
  AdvancedMarker,  // Marcador avanzado que se puede personalizar.
  Pin,             // Pin es un componente visual que se utiliza dentro del marcador.
  InfoWindow,      // Ventana de información que aparece cuando se interactúa con el marcador.
} from "@vis.gl/react-google-maps";

export default function Intro() {
    const position = {lat: 53.54, lng: 10};
    const [open, setOpen] = useState(false);

    return (
        <APIProvider apiKey='AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM'>
            <div style={{height: "100vh", width: "100%"}}>
                <Map
                    zoom={9}
                    center={position}
                    mapId={'55eb5b901c013014'}
                >
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>HELLOOO estoy en Hamburgo</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
}