import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

class Menu extends Component{
  render(){
    let imgPrincipal = 'https://www.viajanet.com.br/blog/wp-content/uploads/2018/08/foto-que-fica-embaixo-da-linha-fina.jpg'
    return(
      <View>
        <Image 
          source={{uri: imgPrincipal}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
      </View>
    )
  }
}

const lugares = [
  {
    id: '1',
    nome: 'Praia de Jericoacoara - Ceará',
    sobre: 'Jericoacoara, carinhosamente conhecida como Jeri, é uma pérola no litoral do Ceará, um destino que se tornou sinônimo de beleza e encantamento natural. Esta charmosa vila de pescadores, localizada em um Parque Nacional, é um convite aberto à aventura, cercada por imponentes dunas e lagoas cristalinas de água doce. O que torna Jericoacoara verdadeiramente singular é a sua autenticidade e o respeito pela natureza.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103139/Jericoacoara-ceara.webp',
  },
  {
    id: '2',
    nome: 'Alter do Chão - Pará',
    sobre: 'Esta paisagem paradisíaca, complementada pela exuberante vegetação amazônica e pelo céu azul intenso, oferece um cenário perfeito para relaxamento, banhos refrescantes e passeios de barco inesquecíveis. Além de sua beleza natural, Alter do Chão é um lugar ideal para se conectar com a cultura local e experimentar a gastronomia regional. Um destino que promete encantar e criar memórias que durarão uma vida inteira.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103140/alter-do-chao-para.webp',
  },
  {
    id: '3',
    nome: 'Praia da Pipa - Rio Grande do Norte',
    sobre: 'A Praia da Pipa é um verdadeiro paraíso famoso pela agitada vida social. Este refúgio, localizado no Rio Grande do Norte, é um exemplo de beleza natural com seus coqueirais que dançam ao sopro do vento, piscinas naturais de águas cristalinas, dunas imponentes e falésias majestosas cobertas pela exuberante Mata Atlântica. Essa beleza natural é complementada por uma consciência ambiental, com a área sendo dedicada à preservação ambiental, garantindo a manutenção deste paraíso terrestre!',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103126/praia-de-pipa-rn.jpg',
  },
  {
    id: '4',
    nome: 'São Miguel dos Milagres - Alagoas',
    sobre: 'A Praia de São Miguel dos Milagres, em Alagoas, é um recanto tropical onde a natureza parece ter sido especialmente generosa. Sua orla é graciosamente sombreada por coqueiros que balançam ao sabor da brisa marinha, criando um cenário de tranquilidade e beleza. A presença de recifes de coral próximos à costa forma inúmeras piscinas naturais, cujas águas cristalinas convidam para um mergulho relaxante e a observação da vida marinha colorida.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103132/sao-miguel-dos-milagres-alagoas.webp',
  },
  {
    id: '5',
    nome: 'Prainhas do Pontal do Atalaia - Rio de Janeiro',
    sobre: 'Situada a cerca de duas horas do Rio de Janeiro, a Prainha do Pontal do Atalaia é um verdadeiro paraíso escondido na famosa Região dos Lagos. Para chegar até esta praia idílica, os visitantes são agraciados com uma descida cênica por uma escadaria de 255 degraus, construída em 2014 para substituir o antigo caminho entre as pedras. Esta praia encantadora, com suas águas cristalinas e areias brancas, é um ponto de encontro privilegiado para amantes do mergulho e da vida marinha. As águas límpidas da região são perfeitas para observar tartarugas marinhas e golfinhos, proporcionando uma experiência mágica e inesquecível.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103138/pontal-do-atalaia-rj-_2_.webp',
  },
  {
    id: '6',
    nome: 'Praia de Itacoatiara - Rio de Janeiro',
    sobre: 'Localizada no município de Niterói, a Praia de Itacoatiara é um verdadeiro santuário natural, famosa por suas águas cristalinas e areias douradas. Mas o que realmente a diferencia é a combinação perfeita de tranquilidade e aventura. A praia é dividida em dois trechos: um ideal para o relaxamento e outro perfeito para o surf, com ondas desafiadoras que atraem surfistas de todos os cantos.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103136/praia-de-itacoatiara-niteroi.webp',
  },
];

const App = () => {
  return (
    <View style={estilos.fundo }>
      <Menu 
        largura='100%' altura={200}
      />
      <Text style={estilos.titulo}>PLANEJE SUA VIAGEM</Text>
      <Text style={estilos.texto}>Lugares famosos do Brasil para você aproveitar!</Text>
      <FlatList
        data={lugares}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.nav}>
            <Image source={{ uri: item.foto }} style={estilos.foto} />
            <View style={estilos.textoInfo}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.sobre}>{item.sobre}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  nav: {
    backgroundColor: 'white',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)', 
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoInfo: {
    flex: 1,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 15,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5
  },
  sobre: {
    fontSize: 14,
    textAlign: 'justify', 
    color: '#5c5858',
    padding: 5
  },
});

export default App;