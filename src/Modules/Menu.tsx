import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import News from './Novedades/News';
import ComplaintForm from 'src/Modules/Denuncia/components/CrimeForm';
import EmergencyNumbers from './Llamadas';
import AppGuide from './Ayuda';
import useCrimen from 'src/Modules/Denuncia/hooks/hookcrimen';
import Icon from './Icon/icon';

const Menu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [componenteSeleccionado, setComponenteSeleccionado] = useState<'noticias' | 'Denuncia' | 'Lineas de ayuda' | 'Ayuda' | null>(null);

  // Utilizamos el hook useCrimen para manejar los estados y funciones del formulario
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

  const seleccionarComponente = (componente: 'noticias' | 'Denuncia' | 'Lineas de ayuda' | 'Ayuda') => {
    setComponenteSeleccionado(componente);
    setMenuAbierto(false);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.contenedor}>
      <TouchableOpacity onPress={toggleMenu} style={styles.botonHamburguesa}>
        <Ionicons name="menu" size={30} color="#fff" />
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
        </View>
      )}

      <Animated.View style={[styles.contenidoPrincipal, { opacity: fadeAnim }]}>
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
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'red',
  },
  botonHamburguesa: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  menuDesplegable: {
    position: 'absolute',
    top: 80,
    left: 20,
    backgroundColor: '#2A0E61',
    padding: 20,
    borderRadius: 10,
    zIndex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  opcionMenu: {
    color: '#fff',
    fontSize: 18,
  },
  contenidoPrincipal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
});

export default Menu;
