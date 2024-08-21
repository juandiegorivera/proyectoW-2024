// Menu.jsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import NewsSection from './Novedades'; 
import  DenunciaForm  from './Form';

const Menu = () => {
  const [value, setValue] = useState(null);

  const data = [
    { label: 'Novedades', value: '1' },
    { label: 'Realizar denuncia', value: '2' },
    { label: 'Ayuda', value: '3' },
    { label: 'Líneas de ayuda', value: '4' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selecciona una opción"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
      {value === '1' && (
        <View style={styles.blockContainer}>
          <NewsSection />
        </View>
      )}
      {value === '2' && (
        <View>
          <DenunciaForm />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  blockContainer: {
    marginTop: 20,
  },
});

export default Menu;
