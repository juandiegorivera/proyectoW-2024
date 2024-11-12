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
    const position = {lat: -38.951666666667, lng: -68.074444444444};
    const [open, setOpen] = useState(false);
    const position2 = {lat: -38.955964, lng: -68.0994502}; //Comisarìa N° 17
    const position3 = {lat: -38.9677843, lng: -68.126897}; //Jefatura de policia 
    const position4 = {lat: -38.9677843, lng: -68.1268976}; //Comisarìa N° 41
    const position5 = {lat: -38.9654653, lng: -68.1908727}; //Comisarìa N° 44
    const position6 = {lat: -38.9527594, lng: -68.2050562}; //Comisarìa N° 12
    const position7 = {lat: -38.9333082, lng: -68.196398}; //Comisarìa N° 18
    const position8 = {lat: -38.9434162, lng: -68.137032}; //Comisarìa N° 16
    const position9 = {lat: -38.939508, lng: -68.1301462}; //Comisarìa N° 21
    const position10 = {lat: -38.9409107, lng: -68.1165849}; //Comisarìa N° 3
    const position11 = {lat: -38.9605517, lng: -68.1098781}; //Comisarìa N° 2
    const position12 = {lat: -38.953247, lng: -68.0886963}; //DIRECCIÓN UNIDADES DE DETENCIÓN
    const position13 = {lat: -38.9441943, lng: -68.1181741}; //Comisaria Barrio Islas Malvinas
    const position14 = {lat: -38.9401889, lng: -68.0912232}; //COMISARIA CUARTA
    const position15 = {lat: -38.9625956, lng: -68.0844104}; //Policia de la Provincia de Neuquén
    const position16 = {lat: 55.54, lng: 10}; //Comisarìa N° 
    const position17 = {lat: 55.54, lng: 10}; //Comisarìa N° 
    const position18 = {lat: 55.54, lng: 10}; //Comisarìa N° 
return (
        <APIProvider apiKey='AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM'>
            <div style={{height: "100vh", width: "100%"}}>
                <Map
                    zoom={9}
                    center={position}
                    mapId={'55eb5b901c013014'}
                >

                    // Comisaría N° 17
                    <AdvancedMarker position={position2} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position2} onCloseClick={() => setOpen(false)}>
                            <p>Comisaría N° 17 - telefono: 299 457-8947</p>
                        </InfoWindow>
                    )}

                    // Jefatura de policia
                    <AdvancedMarker position={position3} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position3} onCloseClick={() => setOpen(false)}>
                            <p>Jefatura de Policía - telefono: 299 449-3900</p>
                        </InfoWindow>
                    )}


                    // Comisarìa N°41 
                    <AdvancedMarker position={position4} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position4} onCloseClick={() => setOpen(false)}>
                            <p>Comisarìa N°41  - telefono: 299 443-1931</p>
                        </InfoWindow>
                    )}


                    // Comisarìa N°44
                    
                    <AdvancedMarker position={position5} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position5} onCloseClick={() => setOpen(false)}>
                            <p>Comisarìa N°44  - telefono: 299 444-0282</p>
                        </InfoWindow>
                    )}


                    // Comisarìa N°12 

                     <AdvancedMarker position={position6} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position6} onCloseClick={() => setOpen(false)}>
                            <p>Comisarìa N°12  - telefono: 0299 445-0185</p>
                        </InfoWindow>
                    )}

                    // Comisarìa N°18 

                    <AdvancedMarker position={position7} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position7} onCloseClick={() => setOpen(false)}>
                            <p>Comisarìa N°18  - telefono: 299 446-0891</p>
                        </InfoWindow>
                    )}

                    
                    // Comisarìa N° 16

                    <AdvancedMarker position={position8} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position8} onCloseClick={() => setOpen(false)}>
                            <p>Comisarìa N°16 - telefono: 299 446-1161</p>
                        </InfoWindow>
                    )}

                    // Comisarìa N° 21

                    <AdvancedMarker position={position9} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position9} onCloseClick={() => setOpen(false)}>
                            <p>Comisarìa N°21 - telefono: 299 446-1577</p>
                        </InfoWindow>
                    )}

                    // Comisarìa N°3

                     <AdvancedMarker position={position10} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position10} onCloseClick={() => setOpen(false)}>
                            <p>Comisarìa N°3  - telefono: 299 443-2872</p>
                        </InfoWindow>
                    )}

                    // Comisarìa N°2

                     <AdvancedMarker position={position11} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position11} onCloseClick={() => setOpen(false)}>
                            <p>Comisarìa N°2  - telefono: 299 442-4063</p>
                        </InfoWindow>
                    )}

                    // DIRECCIÓN UNIDADES DE DETENCIÓN

                     <AdvancedMarker position={position12} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position12} onCloseClick={() => setOpen(false)}>
                            <p>DIRECCIÓN UNIDADES DE DETENCIÓN  - telefono: 299 442-0435</p>
                        </InfoWindow>
                    )}

                    // Comisaria Barrio Islas Malvinas

                    <AdvancedMarker position={position13} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position13} onCloseClick={() => setOpen(false)}>
                            <p>Comisaria Barrio Islas Malvinas  - telefono: 299 576-6042</p>
                        </InfoWindow>
                    )}
    const position15 = {lat: -38.9625956, lng: -68.0844104}; //Policia de la Provincia de Neuquén

                    // Comisaria CUARTA
                    <AdvancedMarker position={position14} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position14} onCloseClick={() => setOpen(false)}>
                            <p>Comisaria Cuarta - telefono: 299 433-1449</p>
                        </InfoWindow>
                    )}

                    // Policia de la Provincia de Neuquén
                    <AdvancedMarker position={position14} onClick={() => setOpen(true)}> 
                        <Pin
                            background={"#62B6CB"}
                            borderColor={"#CAE9FF"}
                            glyphColor={"#1B4965"}
                        />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position15} onCloseClick={() => setOpen(false)}>
                            <p>Policia de la Provincia de Neuquén - telefono: 299 442-4100</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
}


