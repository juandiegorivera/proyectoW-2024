import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import News from './Novedades/News';
import DenunciaForm from './Denuncia/Complaint-Form';

const Menu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [componenteSeleccionado, setComponenteSeleccionado] = useState<'noticias' | 'Denuncia' | 'configuracion' | null>(null);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const seleccionarComponente = (componente: 'noticias' | 'Denuncia' | 'configuracion') => {
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
          <TouchableOpacity onPress={() => seleccionarComponente('noticias')}>
            <Text style={styles.opcionMenu}>Noticias</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => seleccionarComponente('Denuncia')}>
            <Text style={styles.opcionMenu}>Denuncia</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => seleccionarComponente('configuracion')}>
            <Text style={styles.opcionMenu}>Configuración</Text>
          </TouchableOpacity>
        </View>
      )}

      <Animated.View style={[styles.contenidoPrincipal, { opacity: fadeAnim }]}>
        {componenteSeleccionado === 'noticias' && <News />}
        {componenteSeleccionado === 'Denuncia' && <DenunciaForm></DenunciaForm>}
        {componenteSeleccionado === 'configuracion' && <Text>Componente de Configuración</Text>}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#1A1A2E',
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
  opcionMenu: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  contenidoPrincipal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
});

export default Menu;
