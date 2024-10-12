// App.tsx
import React from 'react';
import Menu from './src/components/Menu';
import Mapeishon from './src/components/Mapa/mapa'; 
import ComplaintForm from './src/components/Denuncia/CrimeForm';
import CrimenList from './src/components/Denuncia/CrimeList';
import CrimenAdd from './src/components/Denuncia/CrimeAdd';
import Login from './src/components/TodoLogin/Login';
import RegisterForm from './src/components/Register/registro';


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

