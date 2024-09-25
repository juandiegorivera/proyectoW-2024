// App.tsx
import React from 'react';
import Menu from './src/components/Menu';
import Mapeishon from './src/components/Mapa/mapa'; 

// Editar el componente Mapa para aceptar children
const Mapa: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default function App() {
  return (
    <Mapeishon>
      <Menu />
    </Mapeishon>
  );
}               

