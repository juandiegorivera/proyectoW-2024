import React, { useState } from 'react';
"use client"; // se utiliza en proyectos de Next.js para especificar que este archivo debe ser renderizado en el lado del cliente.

import {
  APIProvider,     // Proveedor de la API de Google Maps.
  Map,             // Componente para renderizar el Mapa.
  AdvancedMarker,  // Marcador avanzado que se puede personalizar.
  Pin,             // Pin es un componente visual que se utiliza dentro del marcador.
  InfoWindow,      // Ventana de información que aparece cuando se interactúa con el marcador.
} from "@vis.gl/react-google-maps";

export default function Mapeishon() {
    const position = {lat: -38.9383376, lng: -68.0687734};
    const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
    const position2 = {lat: -38.964964, lng: -68.0804502}; //Comisarìa N° 17 .
    const position3 = {lat: -38.96747843, lng: -68.08897}; //Jefatura de policia . 
    const position4 = {lat: -38.9750000, lng: -68.0768976}; //Comisarìa N° 41 .
    const position5 = {lat: -38.9654653, lng: -68.1178727}; //Comisarìa N° 44 .
    const position6 = {lat: -38.9530000, lng: -68.1340562}; //Comisarìa N° 12 . 
    const position7 = {lat: -38.9336666, lng: -68.122398}; //Comisarìa N° 18 . 
    const position8 = {lat: -38.9444162, lng: -68.124398}; //Comisarìa N° 16 .
    const position9 = {lat: -38.939508, lng: -68.1051462}; //Comisarìa N° 21
    const position10 = {lat: -38.9309107, lng: -68.0865849}; //Comisarìa N° 3
    const position11 = {lat: -38.9605517, lng: -68.0588781}; //Comisarìa N° 2 . 
    const position12 = {lat: -38.952847, lng: -68.0659963}; //DIRECCIÓN UNIDADES DE DETENCIÓN . 
    const position13 = {lat: -38.9341943, lng: -68.0881741}; //Comisaria Barrio Islas Malvinas
    const position14 = {lat: -38.9349889, lng: -68.0735232}; //COMISARIA CUARTA .
    const position15 = {lat: -38.9625956, lng: -68.049104}; //Policia de la Provincia de Neuquén . 
    const position16 = {lat: -38.9479893, lng: -68.043191}; //Departamento de Seguridad Metropolitana .
    const position17 = {lat: -38.9521525, lng: -68.0538837}; //Comisarìa N° 1 . 
    const position18 = {lat: -38.9119607 , lng: -68.080777}; // Comisarìa N° 20 (parque industrial) . 
return (
        <APIProvider apiKey='AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM'>
            <div style={{height: "100vh", width: "100%"}}>
                <Map
                    zoom={13}
                    center={position}
                    mapId={'55eb5b901c013014'}
                >

                    // Comisaría N° 17
                    <AdvancedMarker position={position2} onClick={() => setSelectedMarker(2)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 2 && (
                        <InfoWindow position={position2} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisaría N° 17 - telefono: 299 457-8947</p>
                        </InfoWindow>
                    )}

                    // Jefatura de policia
                    <AdvancedMarker position={position3} onClick={() => setSelectedMarker(3)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 3 && (
                        <InfoWindow position={position3} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Jefatura de Policía - telefono: 299 449-3900</p>
                        </InfoWindow>
                    )}


                    // Comisarìa N°41 
                    <AdvancedMarker position={position4} onClick={() => setSelectedMarker(4)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 4 && (
                        <InfoWindow position={position4} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisarìa N°41  - telefono: 299 443-1931</p>
                        </InfoWindow>
                    )}


                    // Comisarìa N°44
                    
                    <AdvancedMarker position={position5} onClick={() => setSelectedMarker(5)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 5 && (
                        <InfoWindow position={position5} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisarìa N°44  - telefono: 299 444-0282</p>
                        </InfoWindow>
                    )}


                    // Comisarìa N°12 

                    <AdvancedMarker position={position6} onClick={() => setSelectedMarker(6)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 6 && (
                        <InfoWindow position={position6} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisarìa N°12  - telefono: 0299 445-0185</p>
                        </InfoWindow>
                    )}

                    // Comisarìa N°18 

                    <AdvancedMarker position={position7} onClick={() => setSelectedMarker(7)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 7 && (
                        <InfoWindow position={position7} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisarìa N°18  - telefono: 299 446-0891</p>
                        </InfoWindow>
                    )}

                    
                    // Comisarìa N° 16

                    <AdvancedMarker position={position8} onClick={() => setSelectedMarker(8)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 8 && (
                        <InfoWindow position={position8} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisarìa N°16 - telefono: 299 446-1161</p>
                        </InfoWindow>
                    )}

                    // Comisarìa N° 21

                    <AdvancedMarker position={position9} onClick={() => setSelectedMarker(9)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 9 && (
                        <InfoWindow position={position9} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisarìa N°21 - telefono: 299 446-1577</p>
                        </InfoWindow>
                    )}

                    // Comisarìa N°3

                    <AdvancedMarker position={position10} onClick={() => setSelectedMarker(10)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 10 && (
                        <InfoWindow position={position10} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisarìa N°3  - telefono: 299 443-2872</p>
                        </InfoWindow>
                    )}

                    // Comisarìa N°2

                    <AdvancedMarker position={position11} onClick={() => setSelectedMarker(11)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 11 && (
                        <InfoWindow position={position11} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisarìa N°2  - telefono: 299 442-4063</p>
                        </InfoWindow>
                    )}

                    // DIRECCIÓN UNIDADES DE DETENCIÓN

                    <AdvancedMarker position={position12} onClick={() => setSelectedMarker(12)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 12 && (
                        <InfoWindow position={position12} onCloseClick={() => setSelectedMarker(null)}>
                            <p>DIRECCIÓN UNIDADES DE DETENCIÓN  - telefono: 299 442-0435</p>
                        </InfoWindow>
                    )}

                    // Comisaria Barrio Islas Malvinas

                    <AdvancedMarker position={position13} onClick={() => setSelectedMarker(13)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 13 && (
                        <InfoWindow position={position13} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisaria Barrio Islas Malvinas  - telefono: 299 576-6042</p>
                        </InfoWindow>
                    )}

                    // Comisaria CUARTA
                    <AdvancedMarker position={position14} onClick={() => setSelectedMarker(14)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 14 && (
                        <InfoWindow position={position14} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisaria Cuarta - telefono: 299 433-1449</p>
                        </InfoWindow>
                    )}

                    // Policia de la Provincia de Neuquén
                    <AdvancedMarker position={position15} onClick={() => setSelectedMarker(15)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 15 && (
                        <InfoWindow position={position15} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Policia de la Provincia de Neuquén - telefono: 299 442-4100</p>
                        </InfoWindow>
                    )}

                    //Departamento de Seguridad Metropolitana
                    
                    <AdvancedMarker position={position16} onClick={() => setSelectedMarker(16)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 16 && (
                        <InfoWindow position={position16} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Departamento de Seguridad Metropolitana - telefono: 299 448-5930</p>
                        </InfoWindow>
                    )}

                    // Comisaría N°1 

                    <AdvancedMarker position={position17} onClick={() => setSelectedMarker(17)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 17 && (
                        <InfoWindow position={position17} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisaría N°1 - telefono: 299 442-4046</p>
                        </InfoWindow>
                    )}

                    // Comisaría N°20 

                    <AdvancedMarker position={position18} onClick={() => setSelectedMarker(18)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {selectedMarker === 18 && (
                        <InfoWindow position={position18} onCloseClick={() => setSelectedMarker(null)}>
                            <p>Comisaría N°20 - telefono: 299 441-3305</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
}
