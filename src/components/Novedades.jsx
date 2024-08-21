// Novedades.jsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Block = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.block}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const NewsSection = () => {
  const blocks = [
    {
      title: 'Título 1',
      description: 'Descripción de la novedad 1.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Título 2',
      description: 'Descripción de la novedad 2.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Título 3',
      description: 'Descripción de la novedad 3.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {blocks.map((block, index) => (
        <Block
          key={index}
          title={block.title}
          description={block.description}
          imageUrl={block.imageUrl}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  block: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});

export default NewsSection;
