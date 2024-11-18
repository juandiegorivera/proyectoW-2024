import React from 'react';
import { useRecentCrimes } from './hookNews';
import { View, Text, StyleSheet } from 'react-native';

const RecentCrimes: React.FC = () => {
  const recentCrimes = useRecentCrimes();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Novedades</Text>
      {recentCrimes.length === 0 ? (
        <Text style={styles.noData}>No hay crímenes recientes</Text>
      ) : (
        recentCrimes.map((crime) => (
          <View key={crime.id} style={styles.crimeBox}>
            <Text style={styles.tipo}>{crime.tipo}</Text>
            <Text style={styles.ubicacion}>Ubicación: {crime.ubicacion}</Text>
            <Text style={styles.detalles}>{crime.detalles}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  noData: {
    fontSize: 16,
    color: '#666',
  },
  crimeBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  tipo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  ubicacion: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  detalles: {
    fontSize: 14,
    color: '#777',
  },
});

export default RecentCrimes;
