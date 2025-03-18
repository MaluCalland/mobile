import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';


class Menu extends Component{
  render(){
    let imgPrincipal = 'https://www.viajanet.com.br/blog/wp-content/uploads/2018/08/foto-que-fica-embaixo-da-linha-fina.jpg';


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
    botaoNome:  'Jericoacoara',
    sobre: 'Jericoacoara, carinhosamente conhecida como Jeri, é uma pérola no litoral do Ceará, um destino que se tornou sinônimo de beleza e encantamento natural. Esta charmosa vila de pescadores, localizada em um Parque Nacional, é um convite aberto à aventura, cercada por imponentes dunas e lagoas cristalinas de água doce. O que torna Jericoacoara verdadeiramente singular é a sua autenticidade e o respeito pela natureza.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103139/Jericoacoara-ceara.webp',
    mensagemBotao: 'Em Jericoacoara, no Ceará, você pode visitar praias, lagoas, dunas, trilhas e outros pontos turísticos. Dentre elas: ',
    fotoPasseioUm: 'https://media.staticontent.com/media/pictures/99e1ee23-3590-41bf-b7d2-f63e31e2b087/853x380?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
    descricaoPasseioUm: 'Passeio de buggy lado leste de Jericoacoara'
  },
  {
    id: '2',
    nome: 'Alter do Chão - Pará',
    botaoNome: 'Alter do Chão',
    sobre: 'Esta paisagem paradisíaca, complementada pela exuberante vegetação amazônica e pelo céu azul intenso, oferece um cenário perfeito para relaxamento, banhos refrescantes e passeios de barco inesquecíveis. Além de sua beleza natural, Alter do Chão é um lugar ideal para se conectar com a cultura local e experimentar a gastronomia regional. Um destino que promete encantar e criar memórias que durarão uma vida inteira.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103140/alter-do-chao-para.webp',
  },
  {
    id: '3',
    nome: 'Praia da Pipa - Rio Grande do Norte',
    botaoNome: 'Praia da Pipa',
    sobre: 'A Praia da Pipa é um verdadeiro paraíso famoso pela agitada vida social. Este refúgio, localizado no Rio Grande do Norte, é um exemplo de beleza natural com seus coqueirais que dançam ao sopro do vento, piscinas naturais de águas cristalinas, dunas imponentes e falésias majestosas cobertas pela exuberante Mata Atlântica. Essa beleza natural é complementada por uma consciência ambiental, com a área sendo dedicada à preservação ambiental, garantindo a manutenção deste paraíso terrestre!',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103126/praia-de-pipa-rn.jpg',
  },
  {
    id: '4',
    nome: 'São Miguel dos Milagres - Alagoas',
    botaoNome: 'São Miguel dos Milagres',
    sobre: 'A Praia de São Miguel dos Milagres, em Alagoas, é um recanto tropical onde a natureza parece ter sido especialmente generosa. Sua orla é graciosamente sombreada por coqueiros que balançam ao sabor da brisa marinha, criando um cenário de tranquilidade e beleza. A presença de recifes de coral próximos à costa forma inúmeras piscinas naturais, cujas águas cristalinas convidam para um mergulho relaxante e a observação da vida marinha colorida.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103132/sao-miguel-dos-milagres-alagoas.webp',
  },
  {
    id: '5',
    nome: 'Prainhas do Pontal do Atalaia - Rio de Janeiro',
    botaoNome: 'Prainhas do Pontal do Atalaia ',
    sobre: 'Situada a cerca de duas horas do Rio de Janeiro, a Prainha do Pontal do Atalaia é um verdadeiro paraíso escondido na famosa Região dos Lagos. Para chegar até esta praia idílica, os visitantes são agraciados com uma descida cênica por uma escadaria de 255 degraus, construída em 2014 para substituir o antigo caminho entre as pedras. Esta praia encantadora, com suas águas cristalinas e areias brancas, é um ponto de encontro privilegiado para amantes do mergulho e da vida marinha. As águas límpidas da região são perfeitas para observar tartarugas marinhas e golfinhos, proporcionando uma experiência mágica e inesquecível.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103138/pontal-do-atalaia-rj-_2_.webp',
  },
  {
    id: '6',
    nome: 'Praia de Itacoatiara - Rio de Janeiro',
    botaoNome: 'Praia de Itacoatiara',
    sobre: 'Localizada no município de Niterói, a Praia de Itacoatiara é um verdadeiro santuário natural, famosa por suas águas cristalinas e areias douradas. Mas o que realmente a diferencia é a combinação perfeita de tranquilidade e aventura. A praia é dividida em dois trechos: um ideal para o relaxamento e outro perfeito para o surf, com ondas desafiadoras que atraem surfistas de todos os cantos.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103136/praia-de-itacoatiara-niteroi.webp',
  },
];


class PrimeiroLugar extends Component {
  render() {
    const passeios = [
      {
        id: '1',
        foto: 'https://media.staticontent.com/media/pictures/99e1ee23-3590-41bf-b7d2-f63e31e2b087/853x380?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
        nome: 'Passeio de buggy lado leste de Jericoacoara',
        descricao: 'Este passeio com os pés na areia levará você a conhecer dunas, praias e lagoas perfeitas para cartões postais. A 300 km de Fortaleza, Jericoacoara é uma área de preservação ambiental que atrai turistas do mundo todo pelo seu ar rústico e belezas naturais.'
      },
      {
        id: '2',
        foto: 'https://media.staticontent.com/media/pictures/c3490f49-8b05-427c-b58d-2cacf393e3d2/853x380?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
        nome: 'Passeio Litoral Oeste - Tatajuba',
        descricao: 'O passeio oeste de Jericoacoara tem aproximadamente 05h de duração, incluindo paisagens singulares, observação de cavalos marinhos, brincadeiras que têm a cara do Ceará e areia, muita areia! Este passeio tem menos descanso e mais aventura.'
      },
    ];
    return (
      <>
        <View style={estilos.navSegundaPagina}>
          <Text style={estilos.nome}>Em Jericoacoara, no Ceará, você pode visitar praias, lagoas, dunas, trilhas e outros pontos turísticos. Dentre elas:</Text>
        </View>
        <FlatList
          data={passeios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilos.navSegundaPagina}>
              <Image
                source={{ uri: item.foto }}
                style={estilos.foto}
              />
              <View style={estilos.textContainer}>
                <Text style={estilos.nome}>{item.nome}</Text>
                <Text style={estilos.sobre}>{item.descricao}</Text>
              </View>
            </View>
          )}
        />
      </>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDetalhes: false,
      detalhes: '',
    };
  }


  clicar = (mensagem) => {
    this.setState({
      mostrarDetalhes: true,
      detalhes: mensagem,
    });
  };


  render(){
    return (
      <View style={estilos.fundo }>
        <Menu largura="100%" altura={200} />
        <Text style={estilos.titulo}>PLANEJE SUA VIAGEM</Text>
        <Text style={estilos.texto}>Lugares famosos do Brasil para você aproveitar!</Text>
       
        <FlatList
          data={lugares}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilos.nav}>
              <Image source={{ uri: item.foto }} style={estilos.foto} />
              <View style={estilos.textContainer}>
                <Text style={estilos.nome}>{item.nome}</Text>
                <Text style={estilos.sobre}>{item.sobre}</Text>
                <TouchableOpacity
                  style={estilos.botao}
                  onPress={() => this.clicar(<PrimeiroLugar />)}
                >
                  <Text style={estilos.botao}> Conheça mais sobre {item.botaoNome}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
       
        {/* Exibe os detalhes quando clicado */}
        {this.state.mostrarDetalhes && (
          <PrimeiroLugar />
        )}
      </View>
    );  
  }
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
  },
  nav: {
    backgroundColor: 'white',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navSegundaPagina: {
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5
  },
  sobre: {
    fontSize: 14,
    color: '#555',
    padding: 5
  },
  botao: {
    backgroundColor: 'white',
    borderRadius: 8,      
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
  }
});


export default App;                                                                                                         