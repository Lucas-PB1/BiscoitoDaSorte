import frases from './frases.json';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [frase, setFrase] = useState('');

  const openBiscoit = () => {
    const fraseAleatoria = `"${frases[Math.floor(Math.random() * frases.length)].frase}"`;
    setFrase(fraseAleatoria);
    setImg(require('./src/biscoitoAberto.png'));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img}></Image>
      <Text style={styles.frase}>{frase}</Text>
      <TouchableOpacity style={styles.btn} onPress={openBiscoit}>
        <Text style={styles.btntext}>Abra o biscoito</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  frase: {
    margin: 10,
    fontSize: 20,
    color: '#dd7b22',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 230,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#dd7b22'
  },
  btntext: {
    padding: 20,
    color: 'white',
    textAlign: 'center'
  }
});
