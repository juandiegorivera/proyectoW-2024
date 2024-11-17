import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { HELPS } from 'constants/index';
import useFirestoreCreateError from '../hook/hookErrors';

export default function ErrorNotificationForm() {
  const { addError, isAdded } = useFirestoreCreateError();
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (description.trim() === '') {
      setMessage('Por favor, describe el error.');
      return;
    }
    addError({ description })
      .then(() => {
        setMessage('Error reportado exitosamente');
        setDescription('');
      })
      .catch((error) => setMessage(`Error al reportar el error: ${error.message}`));
  };

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
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        
        {message ? (
          <Text style={styles.message}>{message}</Text>
        ) : null}

        <View style={styles.guideSection}>
          <Text style={styles.guideTitle}>Guía de la App:</Text>
          <View style={styles.guideList}>
            {HELPS.map((item, index) => (
              <View key={index} style={styles.guideItem}>
                {React.createElement(item.icon)}
                <Text style={styles.guideText}>{item.description}</Text>
              </View>
            ))}
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
  guideText: {
    flex: 1,
  },
  message: {
    color: 'green',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
