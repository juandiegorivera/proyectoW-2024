import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRecentCrimes } from './hookNews';

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
            <View style={styles.typeContainer}>
              <View style={styles.typeBadge}>
                <Text style={styles.tipo}>{crime.tipo}</Text>
              </View>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.ubicacion}>
                <Text style={styles.label}>Ubicación: </Text>
                {crime.ubicacion}
              </Text>
              <Text style={styles.detalles}>{crime.detalles}</Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    minHeight: '100%',
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
    color: '#1B4965',
    letterSpacing: 0.5,
  },
  noData: {
    fontSize: 16,
    color: '#62B6CB',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  crimeBox: {
    backgroundColor: '#CAE9FF',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#1B4965',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  typeContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  typeBadge: {
    backgroundColor: '#1B4965',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  tipo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  contentContainer: {
    padding: 16,
    paddingTop: 8,
  },
  label: {
    fontWeight: '600',
    color: '#1B4965',
  },
  ubicacion: {
    fontSize: 15,
    color: '#1B4965',
    marginBottom: 8,
    lineHeight: 20,
  },
  detalles: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
  },
});

export default RecentCrimes;