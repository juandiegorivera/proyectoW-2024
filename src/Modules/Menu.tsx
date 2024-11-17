import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import News from './Novedades/News';
import ComplaintForm from 'src/Modules/Denuncia/components/CrimeForm';
import EmergencyNumbers from './Llamadas';
import AppGuide from './formguia/components/Errors'
import useCrimen from 'src/Modules/Denuncia/hooks/hookcrimen';
import Icon from './Icon/icon';
import DroneController from './Dron/DroneController';

const Menu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [componenteSeleccionado, setComponenteSeleccionado] = useState<'noticias' | 'Denuncia' | 'Lineas de ayuda' | 'Ayuda' | 'dron' | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const {
    tipoDeRobo,
    setTipoDeRobo,
    detalles,
    setDetalles,
    ubicacion,
    setUbicacion,
    handleSubmit,
  } = useCrimen();

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const seleccionarComponente = (componente: 'noticias' | 'Denuncia' | 'Lineas de ayuda' | 'Ayuda' | 'dron') => {
    setComponenteSeleccionado(componente);
    setMenuAbierto(false);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const cerrarComponente = () => {
    setComponenteSeleccionado(null);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.contenedor}>
      <TouchableOpacity onPress={toggleMenu} style={styles.botonHamburguesa}>
        <Ionicons name="menu" size={30} color="#1B4965" />
      </TouchableOpacity>

      {menuAbierto && (
        <View style={styles.menuDesplegable}>
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => seleccionarComponente('noticias')}
          >
            <Icon type="newspaper" />
            <Text style={styles.opcionMenu}>Noticias</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => seleccionarComponente('Denuncia')}
          >
            <Icon type="bullhorn" />
            <Text style={styles.opcionMenu}>Denuncia</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => seleccionarComponente('Lineas de ayuda')}
          >
            <Icon type="phone" />
            <Text style={styles.opcionMenu}>Lineas de ayuda</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => seleccionarComponente('Ayuda')}
          >
            <Icon type="question" />
            <Text style={styles.opcionMenu}>Guia</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => seleccionarComponente('dron')}
          >
            <Icon type="dron" />
            <Text style={styles.opcionMenu}>Control Dron</Text>
          </TouchableOpacity>
        </View>
      )}

      <Animated.View style={[styles.contenidoPrincipal, { opacity: fadeAnim }]}>
        {componenteSeleccionado && (
          <TouchableOpacity style={styles.botonCerrar} onPress={cerrarComponente}>
            <Ionicons name="close-circle" size={30} color="#1B4965" />
          </TouchableOpacity>
        )}
        {componenteSeleccionado === 'noticias' && <News />}
        {componenteSeleccionado === 'Denuncia' && (
          <ComplaintForm
            tipoDeRobo={tipoDeRobo}
            setTipoDeRobo={setTipoDeRobo}
            detalles={detalles}
            setDetalles={setDetalles}
            ubicacion={ubicacion}
            setUbicacion={setUbicacion}
            handleSubmit={handleSubmit}
          />
        )}
        {componenteSeleccionado === 'Lineas de ayuda' && <EmergencyNumbers />}
        {componenteSeleccionado === 'Ayuda' && <AppGuide />}
        {componenteSeleccionado === 'dron' && <DroneController />}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  botonHamburguesa: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuDesplegable: {
    position: 'absolute',
    top: 80,
    left: 20,
    backgroundColor: '#CAE9FF',
    padding: 20,
    borderRadius: 12,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
  },
  opcionMenu: {
    color: '#1B4965',
    fontSize: 18,
    marginLeft: 12,
    fontWeight: '500',
  },
  contenidoPrincipal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  botonCerrar: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Menu;