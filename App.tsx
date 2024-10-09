// App.tsx
import React from 'react';
import Menu from './src/components/Menu';
import DenunciaForm from './src/components/Denuncia/Complaint-Form';
import CrimenAdd from './src/components/Denuncia/Add-Complaint';
import CrimenList from './src/components/Denuncia/Edit-Complaint';
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

