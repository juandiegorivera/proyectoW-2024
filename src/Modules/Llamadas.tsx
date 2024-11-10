import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { numbers } from '../../constants';

const EmergencyNumbers: React.FC = () => {
  return (
    <View style={styles.container}>
      {numbers.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.number}>{item.number}.</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAE9FF',
    borderRadius: 10,
    padding: 20,
  },
  item: {
    marginBottom: 10,
  },
  number: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#1B4965',
  },
  description: {
    color: '#1B4965',
  },
});

export default EmergencyNumbers;
