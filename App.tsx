// App.tsx
import React from 'react';
import Menu from './src/Modules/Menu';
import Mapeishon from './src/Modules/Mapa/mapa'; 
import ComplaintForm from './src/Modules/Denuncia/components/CrimeForm';
import CrimenList from './src/Modules/Denuncia/components/CrimeList';
import CrimenAdd from './src/Modules/Denuncia/components/CrimeAdd';
import Login from './src/Modules/Screens/Login';
import RegisterForm from './src/Modules/Screens/Registro';


// Editar el componente Mapa para aceptar children
const Mapa: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};


export default function App() {
  return (
      <Menu />
  );
}

