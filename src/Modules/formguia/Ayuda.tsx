import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ErrorNotificationForm() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Notificar Error</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Describe el error aquí"
            placeholderTextColor="#666"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.guideSection}>
          <Text style={styles.guideTitle}>Guía de la App:</Text>
          <View style={styles.guideList}>
            <View style={styles.guideItem}>
              <Text style={styles.guideIcon}>📰</Text>
              <Text style={styles.guideText}>En el menú de novedades se podrán los casos más recientes de la ciudad.</Text>
            </View>
            <View style={styles.guideItem}>
              <Text style={styles.guideIcon}>📢</Text>
              <Text style={styles.guideText}>En el menú de Realizar denuncia podrás anunciar a los administradores de la app o a las autoridades tu caso mediante un formulario.</Text>
            </View>
            <View style={styles.guideItem}>
              <Text style={styles.guideIcon}>📞</Text>
              <Text style={styles.guideText}>En el menú de Líneas de ayuda se te mostrarán los números telefónicos de las líneas de emergencia de la ciudad.</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#CAE9FF',
    borderRadius: 10,
    padding: 16,
    margin: 16,
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B4965',
  },
  cardContent: {
    gap: 24,
  },
  inputContainer: {
    gap: 16,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#99D500',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guideSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    padding: 16,
  },
  guideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  guideList: {
    gap: 12,
  },
  guideItem: {
    flexDirection: 'row',
    gap: 8,
  },
  guideIcon: {
    fontSize: 20,
  },
  guideText: {
    flex: 1,
  },
});