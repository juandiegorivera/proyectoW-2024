import React, { useState } from 'react';
import { Novedades } from "../../../constants";
import { NewCard } from './News-Card';
import { View, StyleSheet, ScrollView } from 'react-native';

export const News = () => {
  // Estado para controlar la visibilidad de la barra de desplazamiento
  const [showScrollbar, setShowScrollbar] = useState(false);

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      // Controla la visibilidad de la barra de desplazamiento vertical
      showsVerticalScrollIndicator={showScrollbar}
      // Oculta la barra de desplazamiento cuando el usuario termina de tocar la pantalla
      onTouchEnd={() => setShowScrollbar(false)}
    >
      {Novedades.map((noticias) => (
        <View key={noticias.title}>
          <NewCard
            src={noticias.image}
            title={noticias.title}
            description={noticias.description}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    flexGrow: 1,
    padding: 30,
    borderWidth: 2,
    borderColor: '#2A0E61',
    borderRadius: 10,
    backgroundColor: '#2A0E61',
    width: '60%', 
    alignSelf: 'center', // Centra el contenedor horizontalmente
  },
});

export default News;

