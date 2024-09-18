// App.tsx
import React from 'react';
import Menu from './src/components/Menu';
import {MapaProps} from './src/components/Mapa/mapa'; // Asegúrate de importar los tipos necesarios

export default function App() {
  return (
    <Mapa>   
      <Menu />
    </Mapa>
  );
}

// ... en el componente Mapa, asegúrate de definir los props correctamente
// {{ edit_1 }}
type MapaProps = {
  children: React.ReactNode; // Asegúrate de que Mapa acepte children
};

const Mapa: React.FC<MapaProps> = ({ children }) => {
  return <div>{children}</div>; // Renderiza los children
};

