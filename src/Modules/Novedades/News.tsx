import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Novedades } from "../../../constants";
import NewCards from '../Novedades/News-Card';

export const News = () => {
  const [showScrollbar, setShowScrollbar] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.pageTitle}>Novedades</Text>
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={showScrollbar}
        onTouchEnd={() => setShowScrollbar(false)}
      >
        {Novedades.map((noticias) => (
          <View key={noticias.title} style={styles.cardWrapper}>
            <NewCards
              src={noticias.image}
              title={noticias.title}
              description={noticias.description}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#59baff',
    flex: 1,
    width: '100%',
    padding: 16,
    maxWidth: 800,
    alignSelf: 'center',
    marginTop: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1B4965',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  container: {
    gap: 20,
    paddingBottom: 20,
  },
  cardWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default News;