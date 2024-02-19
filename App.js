import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import InformationInput from './components/InformationInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [information, setInformation] = useState([]);

  const startModal = () => {
    setModalIsVisible(true);
  };

  const endModal = () => {
    setModalIsVisible(false);
  };

  const addInformation = (informationTitle) => {
    setInformation(currentInformation => [
      ...currentInformation,
      { text: informationTitle, id: Math.random().toString() }
    ]);
    endModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Bilgileri Giriniz' color='grey' onPress={startModal}></Button>
        <InformationInput
          visible={modalIsVisible}
          onAddInformation={addInformation}
          onCancel={endModal}
        />
        <View>
        <FlatList
  data={information}
  renderItem={({ item }) => (
    <View style={styles.informationItem}>
      <Text style={styles.informationText}>{item.text}</Text>
    </View>
  )}
/>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  informationItem: {
    margin:10,
    color: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'pink',
    borderColor: 'black',
    borderWidth: 1,
  },
  informationText: {
    color: 'white',
  },
});
