// App.tsx
import React from 'react';
import Menu from './src/components/Menu';
import DenunciaForm from './src/components/Denuncia/CrimeForm';
import CrimenAdd from './src/components/Denuncia/CrimeAdd';
import CrimenList from './src/components/Denuncia/CrimeList';
import {Mapa} from './src/components/Mapa/mapa';
import { View } from 'react-native';
import Mapeishon from './src/components/Mapa/mapa'; 
import GoogleLogin from '@/components/login/GoogleLogin';

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

