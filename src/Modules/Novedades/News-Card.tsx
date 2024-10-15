import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type NewCardProps = {
  src: string;
  title: string;
  description: string;
};

export const NewCard = ({
  src,
  title,
  description,
}: NewCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        src={src}
        alt={title}
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#2A0E61',
    backgroundColor: '#1A1A2E',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#A0A0B2',
  },
});
