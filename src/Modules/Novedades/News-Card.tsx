import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface NewCardsProps {
  src: string;
  title: string;
  description: string;
}

const NewCards: React.FC<NewCardsProps> = ({ src, title, description }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: src }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#CAE9FF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    color: '#1B4965',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 8,
  },
  description: {
    color: '#333',
    fontSize: 16,
  },
});

export default NewCards;