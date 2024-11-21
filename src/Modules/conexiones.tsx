import React from 'react';
import { NativeRouter, Route, Routes, useNavigate } from 'react-router-native';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import RegisterForm from './Screens/Registrarse/components/Registro';
import FormLogin from './Screens/log/components/Login';
import Mapeishon from 'src/Modules/Mapa/mapa2';
import PolisLogo from 'src/Modules/Icon/polislogo';

const Mapa: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const Conexiones: React.FC = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/mapa2" element={<Mapeishon />} />
      </Routes>
    </NativeRouter>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [animation] = React.useState(new Animated.Value(0));
  const [logoScale] = React.useState(new Animated.Value(1));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(logoScale, {
          toValue: 1.1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
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
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: logoScale }] }]}>
        <PolisLogo width={450} height={450} />
      </Animated.View>
      <View style={styles.BoxBotons}>
        <Animated.Text style={[styles.title, animatedStyle]}>Bienvenido a SecuroServ</Animated.Text>
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
  BoxBotons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: -300,
  },
  logoContainer: {
    top: -200,
    left: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',
    letterSpacing: 1,
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

