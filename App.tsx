import React from 'react';
import { NativeRouter, Route, Routes, useNavigate } from 'react-router-native';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Button } from 'react-native';
import Menu from './src/Modules/Menu';
import ComplaintForm from './src/Modules/Denuncia/components/CrimeForm';
import CrimenList from './src/Modules/Denuncia/components/CrimeList';
import CrimenAdd from './src/Modules/Denuncia/components/CrimeAdd';
import Login from './src/Modules/Screens/log/components/Login';
import RegisterForm from './src/Modules/Screens/Registrarse/components/Registro';
import Conexiones from './src/Modules/conexiones';
import DroneController from './src/Modules/Dron/DroneController';
import Mapeishon from '@/Modules/Mapa/mapa2';


// Editar el componente Mapa para aceptar children
const Mapa: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};


// App.tsx
const App: React.FC = () => {
  return <Conexiones/>;
};

export default App;