import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const technologies = [
  {
    id: '1',
    name: 'Tempo',
    description: 'Sistemas que simulam a inteligência humana para tarefas complexas.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Computação Quântica',
    description: 'Uso de bits quânticos para resolver problemas impossíveis para computadores clássicos.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: '5G',
    description: 'Nova geração de redes móveis com alta velocidade e baixa latência.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    name: 'Biotecnologia',
    description: 'Uso da biologia para desenvolver novas tecnologias e produtos.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '5',
    name: 'Carros Autônomos',
    description: 'Veículos que utilizam IA para navegar sem intervenção humana.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '6',
    name: 'Blockchain',
    description: 'Tecnologia descentralizada que garante segurança e transparência em transações.',
    image: 'https://via.placeholder.com/150',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conheça novos lugares e planeje sua viagem</Text>
      <FlatList
        data={technologies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 30,
    backgroundColor: '#8ABFF4',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 10
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;