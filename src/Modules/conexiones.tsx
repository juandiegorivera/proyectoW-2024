// conexiones.tsx
import React from 'react';
import { NativeRouter, Route, Routes, useNavigate } from 'react-router-native';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import RegisterForm from './Screens/Registro';
import Mapeishon from 'src/Modules/Mapa/mapa';
import ComplaintForm from './Denuncia/components/CrimeForm';
import CrimenList from './Denuncia/components/CrimeList';
import CrimenAdd from './Denuncia/components/CrimeAdd';
import Login from './Screens/Login';

// Editar el componente Mapa para aceptar children
const Mapa: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const Conexiones: React.FC = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </NativeRouter>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [animation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyle = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, animatedStyle]}>Bienvenido</Animated.Text>
      <Animated.View style={animatedStyle}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('/login')}
        >
          <Text style={styles.buttonText}>Ir a Login</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={animatedStyle}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('/register')}
        >
          <Text style={styles.buttonText}>Ir a Registro</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Conexiones;
