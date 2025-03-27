import React, { Component, useState} from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView , TextInput, Switch, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

const Stack = createStackNavigator();

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

class Entrar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        state: {
          notificacao: false,  
          mensagem: false,          
        },
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        local: '',
        locais: [
          {key: 1, nome: 'Ceará'},        
          {key: 1, nome: 'Pará'},        
          {key: 1, nome: 'Rio Grande do Norte'},        
          {key: 1, nome: 'Rio de Janeiro'},        
          {key: 1, nome: 'Alagoas'},        
        ],
        dataIda: '',
        datasIda: [
          {key: 1, diaIda: 1},  {key: 1, diaIda: 2}, {key: 1, diaIda: 3}, {key: 1, diaIda: 4}, {key: 1, diaIda: 5}, {key: 1, diaIda: 6}, {key: 1, diaIda: 7}, {key: 1, diaIda: 8}, {key: 1, diaIda: 9}, {key: 1, diaIda: 10}, {key: 1, diaIda: 11}, {key: 1, diaIda: 12}, {key: 1, diaIda: 13}, {key: 1, diaIda: 14}, {key: 1, diaIda: 15}, {key: 1, diaIda: 16}, {key: 1, diaIda: 17}, {key: 1, diaIda: 18}, {key: 1, diaIda: 19}, {key: 1, diaIda: 20}, {key: 1, diaIda: 21}, {key: 1, diaIda: 22}, {key: 1, diaIda: 23}, {key: 1, diaIda: 24}, {key: 1, diaIda: 25}, {key: 1, diaIda: 26}, {key: 1, diaIda: 27}, {key: 1, diaIda: 28}, {key: 1, diaIda: 29}, {key: 1, diaIda: 30}, {key: 1, diaIda: 31}       
        ],
        dataVolta: '',
        datasVolta: [
          {key: 1, diaVolta: 1}, {key: 1, diaVolta: 2}, {key: 1, diaVolta: 3}, {key: 1, diaVolta: 4}, {key: 1, diaVolta: 5}, {key: 1, diaVolta: 6}, {key: 1, diaVolta: 7}, {key: 1, diaVolta: 8}, {key: 1, diaVolta: 9},{key: 1, diaVolta: 10}, {key: 1, diaVolta: 11},{key: 1, diaVolta: 12},{key: 1, diaVolta: 13},{key: 1, diaVolta: 14}, {key: 1, diaVolta: 15}, {key: 1, diaVolta: 16}, {key: 1, diaVolta: 17}, {key: 1, diaVolta: 18}, {key: 1, diaVolta: 19}, {key: 1, diaVolta: 20}, {key: 1, diaVolta: 21}, {key: 1, diaVolta: 22}, {key: 1, diaVolta: 23}, {key: 1, diaVolta: 24}, {key: 1, diaVolta: 25}, {key: 1, diaVolta: 26}, {key: 1, diaVolta: 27}, {key: 1, diaVolta: 28}, {key: 1, diaVolta: 29}, {key: 1, diaVolta: 30}, {key: 1, diaVolta: 31}
        ],
        input: '',
        nota: 5,
        faixaPreco: 500,
      };
      this.entradaNome = this.entradaNome.bind(this);
      this.entradaCpf = this.entradaCpf.bind(this)
      this.entradaEmail = this.entradaEmail.bind(this)
      this.entradaTelefone = this.entradaTelefone.bind(this)
  }

  entradaNome = (texto) => {
    this.setState({ nome: texto });
  };

  entradaCpf = (texto) => {
    this.setState({ cpf: texto });
  };

  entradaEmail = (texto) => {
    this.setState({ email: texto });
  };

  entradaTelefone = (texto) => {
    this.setState({ telefone: texto });
  };

  render() {

    let locaisItem = this.state.locais.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    let dataIda = this.state.datasIda.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.diaIda}/>
    })

    let dataVolta = this.state.datasVolta.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.diaVolta}/>
    })

    return(
      <View style={estilos.fundo}>
        <ScrollView>
          <View style={estilos.containerPrincipal}>
            <Text style={{fontSize: 30, color: '#87CEFA', textAlign: 'center', padding:20, fontWeight: 'bold'}}>Viagem360</Text>
            <TextInput 
              style={estilos.input}
              placeholder="Digite seu nome"
              underlineColorAndroid="transparent"
              onChangeText={this.entradaNome}
            />
            <TextInput
              style={estilos.input}
              placeholder="Digite seu CPF"
              underlineColorAndroid="transparent"
              onChangeText={this.entradaCpf}
            />
            <TextInput
              style={estilos.input}
              placeholder="Digite seu email"
              underlineColorAndroid="transparent"
              onChangeText={this.entradaEmail}
            />
            <TextInput
              style={estilos.input}
              placeholder="Digite seu telefone"
              underlineColorAndroid="transparent"
              onChangeText={this.entradaTelefone}
            />
            <View style={estilos.resultadoContainerFundo}>
              <Text style={estilos.textoResultado}>Nome: {this.state.nome}</Text>
              <Text style={estilos.textoResultado}>CPF: {this.state.cpf}</Text>
              <Text style={estilos.textoResultado}>Email: {this.state.email}</Text>
              <Text style={estilos.textoResultado}>Telefone: {this.state.telefone}</Text>
            </View>

            <Text style={{fontSize: 18, marginTop:25, fontWeight: 'bold'}}>Escolha seu destino:</Text>
              <Picker
                  style={estilos.resultadoContainerFundo}
                  selectedValue={this.state.local}
                  onValueChange={(itemValue, itemIndex) => this.setState({local: itemValue})}>
                  {locaisItem}
              </Picker>

            <Text style={{fontSize: 18, marginTop:25, fontWeight: 'bold'}}>Escolha dia de ida:</Text>
              <Picker
                style={estilos.resultadoContainerFundo}
                selectedValue={this.state.dataIda}
                onValueChange={(itemValue, itemIndex) => this.setState({diaIda: itemValue})}>
                  {dataIda}
              </Picker>
            <Text style={{fontSize: 18, marginTop:25, fontWeight: 'bold'}}>Escolha dia de volta:</Text>
              <Picker
                style={estilos.resultadoContainerFundo}
                selectedValue={this.state.dataVolta}
                onValueChange={(itemValue, itemIndex) => this.setState({diaVolta: itemValue})}>
                  {dataVolta}
              </Picker>

              <Text style={{ fontSize: 18, marginTop: 25, fontWeight: 'bold' }}>Escolha sua avaliação para o destino:</Text>
              <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
                maximumValue={10}
                step={1}
                value={this.state.nota}
                onValueChange={(value) => this.setState({ nota: value })}
                minimumTrackTintColor="#87CEFA"
                maximumTrackTintColor="#f0f0f0"
                thumbTintColor="#87CEFA"
              />
              <Text style={{fontSize: 20}}>Nota: {this.state.nota}</Text>

              <TouchableOpacity
                onPress={() => alert(`Você avaliou o destino com nota: ${this.state.nota}`)}
                style={{
                  backgroundColor: '#87CEFA',
                  padding: 15,
                  borderRadius: 5,
                  marginTop: 30,
                }}
                >
                <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Enviar Avaliação</Text>
              </TouchableOpacity>

            <Text style={{ fontSize: 18, marginTop: 25, fontWeight: 'bold' }}>Escolha a faixa de preço:</Text>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={100}
              maximumValue={8000}
              step={100}
              value={this.state.faixaPreco}
              onValueChange={(value) => this.setState({ faixaPreco: value })}
              minimumTrackTintColor="#87CEFA"
              maximumTrackTintColor="#f0f0f0"
              thumbTintColor="#87CEFA"
            />
            <Text style={{fontSize: 20}}>{`R$ ${this.state.faixaPreco.toFixed(2)}`}</Text>

            <TouchableOpacity
              onPress={() => alert('Selecionou a faixa de preço!')}
              style={{
                backgroundColor: '#87CEFA',
                padding: 15,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Confirmar Faixa de Preço</Text>
            </TouchableOpacity>

            <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 18, marginBottom: 10,}}>{this.state.notificacao ? 'Notificações Ativadas' : 'Notificações Desativadas'}</Text>
            <Switch
              value={this.state.notificacao}
              onValueChange={(value) => this.setState({ notificacao: value })}
              thumbColor="#87CEFA"
            />
            <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 18, marginBottom: 10,}}> {this.state.mensagem ? 'Receber Mensagens' : 'Não Receber Mensagens'}</Text>
            <Switch
              value={this.state.mensagem}
              onValueChange={(value) => this.setState({ mensagem: value })}
              thumbColor="#87CEFA"
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Imagens')}
              style={estilos.botao}
            >
              <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Paisagens do Brasil para você conhecer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Início')}
              style={estilos.botao}
            >
              <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Conheça nosso App!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class ImagensEntrada extends Component {
  render(){
    let img1 = 'https://s2-g1.glbimg.com/rl8QsJdK8HiGl6KpjeP6MhuERpI=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/v/D/HQZ60oQdmfN5Pmbgi4eg/pantanal-dsc1432-eduardo-palacio-g1.jpg'
    let img2 = 'https://nascenteazul.com.br/wp-content/uploads/2021/07/paisagem-aerea-bonito-ms.png'
    let img3 = 'https://s2-casavogue.glbimg.com/hVxJWLesXtJGAWa0YyX-8bfsf9k=/0x0:2000x1500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/d/T/K3e8cASAycnfqAYkxvKA/03-as-paisagens-naturais-mais-lindas-do-brasil-chapada-dos-veadeiros2-min.jpg'
    let img4 = 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/01407947_8c7f5c3c6h.jpeg?quality=70&strip=info&w=925&w=636'
    let img5 = 'https://nascenteazul.com.br/wp-content/uploads/2021/07/fernando-de-noronha-paisagens-naturais-de-praia-1.png'
    let img6 = 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/pampas-gauchos.jpeg?quality=70&strip=info&w=920&w=636'
    let img7 = 'https://s2-casavogue.glbimg.com/qbK-sF1r6N2hm8rUiQhRg9w4kfQ=/0x0:2113x1419/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/Y/O/ccc6EFS4a382ISDKgpjg/01-as-paisagens-naturais-mais-lindas-do-brasil-floresta-amazonica2-min.jpg'
    let img8 = 'https://s2-casavogue.glbimg.com/pGduDbiKGCTguNBLTf-ua5lktFA=/0x0:2121x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/R/y/EoOHxaQ62cwUyG1EyD9g/06-as-paisagens-naturais-mais-lindas-do-brasil-fernando-de-noronha2-min.jpg'

    return(
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'row',flexWrap: 'wrap', marginTop: 20,}}>
        <Image source={{uri: img1}} style={{  width: '20%', height: 600, marginBottom: 20, marginHorizontal: 100, borderRadius: 8, marginTop: 100}} />
        <Image source={{uri: img2}} style={{  width: '20%', height: 600, marginBottom: 20, marginHorizontal: 100, borderRadius: 8, marginTop: 100}} />
        <Image source={{uri: img3}} style={{  width: '20%', height: 600, marginBottom: 20, marginHorizontal: 100, borderRadius: 8, marginTop: 100}}/>
        <Image source={{uri: img4}} style={{  width: '20%', height: 600, marginBottom: 20, marginHorizontal: 100, borderRadius: 8, marginTop: 100}} />
        <Image source={{uri: img5}} style={{  width: '20%', height: 600, marginBottom: 20, marginHorizontal: 100, borderRadius: 8, marginTop: 100}} />
        <Image source={{uri: img6}} style={{  width: '20%', height: 600, marginBottom: 20, marginHorizontal: 100, borderRadius: 8, marginTop: 100}} />
        <Image source={{uri: img7}} style={{  width: '20%', height: 600, marginBottom: 20, marginHorizontal: 100, borderRadius: 8, marginTop: 100}} />
        <Image source={{uri: img8}} style={{  width: '20%', height: 600, marginBottom: 20, marginHorizontal: 100, borderRadius: 8, marginTop: 100}} />
      </View>
    );
  }
}

const lugares = [
  {
    id: '1',
    nome: 'Praia de Jericoacoara - Ceará',
    sobre: 'Jericoacoara, carinhosamente conhecida como Jeri, é uma pérola no litoral do Ceará, um destino que se tornou sinônimo de beleza e encantamento natural. Esta charmosa vila de pescadores, localizada em um Parque Nacional, é um convite aberto à aventura, cercada por imponentes dunas e lagoas cristalinas de água doce. O que torna Jericoacoara verdadeiramente singular é a sua autenticidade e o respeito pela natureza.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103139/Jericoacoara-ceara.webp',
    mensagem: 'Em Jericoacoara, no Ceará, você pode visitar praias, lagoas, dunas, trilhas e outros pontos turísticos. Dentre elas: ',
    passeios: [
      { id: '1', foto: 'https://media.staticontent.com/media/pictures/99e1ee23-3590-41bf-b7d2-f63e31e2b087/853x380?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1', nome: 'Passeio de buggy lado leste de Jericoacoara', descricao: 'Este passeio com os pés na areia levará você a conhecer dunas, praias e lagoas perfeitas para cartões postais. A 300 km de Fortaleza, Jericoacoara é uma área de preservação ambiental que atrai turistas do mundo todo pelo seu ar rústico e belezas naturais.'},
      { id: '2', foto: 'https://media.staticontent.com/media/pictures/c3490f49-8b05-427c-b58d-2cacf393e3d2/853x380?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1', nome: 'Passeio Litoral Oeste - Tatajuba', descricao: 'O passeio oeste de Jericoacoara tem aproximadamente 05h de duração, incluindo paisagens singulares, observação de cavalos marinhos, brincadeiras que têm a cara do Ceará e areia, muita areia! Este passeio tem menos descanso e mais aventura.' },
      { id: '3', foto: 'https://www.viajenaviagem.com/wp-content/uploads/2015/11/jericoacoara-jardineira-1920x1080-1.jpg.webp', nome: 'Passeios de jardineira', descricao: 'As jardineiras – caminhonetes adaptadas com bancos na traseira – cobram por pessoa, e são a opção econômica para viajantes solos ou em dupla. Jardineiras também são indicadas para quem quer fazer o passeio inteiro à sombra.' },
      { id: '4', foto: 'https://www.viajenaviagem.com/wp-content/uploads/2015/11/jericoacoara-praia-1920x1080-1.jpg.webp', nome: 'Praia da Vila', descricao: 'A praia em frente à vila tem uma faixa de areia que alarga e encurta de acordo com as marés. A água é rasinha, com ondas intermitentes mas inofensivas (dá para fazer stand-up paddle).'},
      { id: '5', foto: 'https://www.viajenaviagem.com/wp-content/uploads/2015/11/jericoacoara-cafe-jeri-1920x1080-1.jpg.webp', nome: 'Pôr do sol no Café Jeri', descricao: 'Atualmente o rooftop do Café Jeri é o mirante mais disputado para assistir ao pôr do sol. Há sempre um DJ nos picapes – e de vez em quando rola uma performance. Os bartenders também adoram dar um showzinho na preparação dos drinks.'},
    ]
  },
  {
    id: '2',
    nome: 'Alter do Chão - Pará',
    sobre: 'Esta paisagem paradisíaca, complementada pela exuberante vegetação amazônica e pelo céu azul intenso, oferece um cenário perfeito para relaxamento, banhos refrescantes e passeios de barco inesquecíveis. Além de sua beleza natural, Alter do Chão é um lugar ideal para se conectar com a cultura local e experimentar a gastronomia regional. Um destino que promete encantar e criar memórias que durarão uma vida inteira.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103140/alter-do-chao-para.webp',
    passeios: [
      { id: '1', foto: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/ac/c9/6b/img-20151031-wa0031-largejpg.jpg', nome: 'Ilha do Amor', descricao: 'A Ilha do Amor é o símbolo de Alter do Chão e uma das praias mais famosas da região. Localizada bem em frente à vila, a ilha se forma durante o período de seca, quando as águas do rio Tapajós recuam, revelando uma faixa de areia branca. O acesso é feito por barcos que partem da vila (um trajeto de menos de 5 minutos) ou, em períodos de águas mais baixas, a pé. Na ilha, é possível relaxar em redes dentro d’água, curtir a praia ou saborear pratos típicos nos bares e quiosques. A paisagem muda ao longo do dia, especialmente no pôr do sol, quando o céu ganha tons avermelhados e alaranjados, criando um dos visuais mais icônicos de Alter do Chão.'},
      { id: '2', foto: 'https://villaaruma.com.br/wp-content/uploads/2022/07/pindobal-capa.jpg.webp', nome: ' Praia do Pindobal', descricao: 'A Praia do Pindobal é uma das praias mais tranquilas e reservadas de Alter do Chão. Com águas cristalinas e calmas, é ideal para quem busca um ambiente mais silencioso, longe do agito turístico. A praia está localizada a cerca de 12 km do centro de Alter do Chão, e o acesso pode ser feito de barco ou de carro, com uma curta caminhada até a faixa de areia. Por ser uma praia menos movimentada, ela oferece uma experiência mais intimista e contato direto com a natureza. É recomendada para famílias, casais e quem deseja descanso e privacidade. Leve lanches e água, pois a estrutura de bares e quiosques é mais limitada.' },
      { id: '3', foto: 'https://vemparaalter.com.br/wp-content/uploads/2023/11/praia-do-cururu-alter-do-chao.webp', nome: 'Ponta do Cururu', descricao: 'A Ponta do Cururu é um dos lugares mais espetaculares para apreciar o pôr do sol em Alter do Chão. Localizada a cerca de 30 minutos de barco da vila, a Ponta do Cururu é uma faixa de areia em forma de “língua” que avança sobre o rio Tapajós. O ambiente é ideal para quem busca paz e silêncio, já que não há bares nem quiosques no local. Muitas agências oferecem passeios de barco para a Ponta do Cururu ao entardecer, proporcionando uma experiência de contemplação do pôr do sol, muitas vezes acompanhado por golfinhos da Amazônia, conhecidos como botos-cor-de-rosa.' },
      { id: '4', foto: 'https://media-cdn.tripadvisor.com/media/photo-s/05/26/12/06/ponta-de-pedras.jpg', nome: 'Ponta das Pedras', descricao: 'A Ponta das Pedras é uma das praias mais populares de Alter do Chão. Seu diferencial está nas formações rochosas que emergem no meio do rio, criando um cenário singular e fotogênico. Localizada a cerca de 14 km do centro de Alter do Chão, o acesso pode ser feito de carro ou barco. A praia possui uma boa estrutura de bares e restaurantes, onde é possível degustar pratos típicos, como o peixe assado na brasa. O local é perfeito para passar o dia, curtindo as águas calmas e os quiosques à beira do rio.' },
      { id: '5', foto: 'https://diariodofb.com/wp-content/uploads/2018/05/LIPE4025-e1651258638566.jpg', nome: 'Serra da Piraoca (Trilha)', descricao: 'Para quem gosta de trilhas e aventura, a Serra da Piraoca é um passeio imperdível. Com uma altitude de aproximadamente 150 metros, a subida até o topo permite uma vista panorâmica de Alter do Chão, incluindo o Lago Verde, o Rio Tapajós e as ilhas ao redor. A trilha tem cerca de 1,5 km de subida e exige certo esforço físico, mas o visual no topo recompensa. O melhor horário para fazer a trilha é ao amanhecer ou ao entardecer, para evitar o calor intenso e aproveitar o pôr ou o nascer do sol. É recomendável ir com o auxílio de um guia local.' },
    ]
  },
  {
    id: '3',
    nome: 'Praia da Pipa - Rio Grande do Norte',
    sobre: 'A Praia da Pipa é um verdadeiro paraíso famoso pela agitada vida social. Este refúgio, localizado no Rio Grande do Norte, é um exemplo de beleza natural com seus coqueirais que dançam ao sopro do vento, piscinas naturais de águas cristalinas, dunas imponentes e falésias majestosas cobertas pela exuberante Mata Atlântica. Essa beleza natural é complementada por uma consciência ambiental, com a área sendo dedicada à preservação ambiental, garantindo a manutenção deste paraíso terrestre!',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103126/praia-de-pipa-rn.jpg',
    passeios: [
      { id: '1', foto: 'https://abracepipa.com.br/wp-content/uploads/2021/09/abracepipa8.jpeg', nome: 'Passeio de Lancha em Tibau do Sul', descricao: 'Esse inesquecível passeio começa com o embarque na lancha na Praia do Centro em Tibau do Sul, de onde seguimos para a Lagoa de Guaraíras, em direção as trilhas nos manguezais. Logo depois, chegando ao nosso destino, fazemos uma parada para o famoso banho de argila rejuvenescedora!' },
      { id: '2', foto: 'https://abracepipa.com.br/wp-content/uploads/2021/10/buggy01.jpg', nome: 'Passeio de Buggy no Litoral Norte de Pipa', descricao: 'A Abrace Pipa Tour te leva para conhecer o que o litoral norte de Pipa reserva, tudo isso durante um inesquecível passeio de buggy. O grande diferencial da nossa agência é que aqui é o turista que escolhe o próprio roteiro! Temos diversas opções de paradas e, junto aos viajantes, montamos um roteiro personalizado, pensado para atender as expectativas e gostos de cada um.' },
      { id: '3', foto: 'https://imagedelivery.net/EafvxYlk8cSUsWEWsetEdQ/bac36a92-eaa3-405b-35af-1c9ca8a8ad00/w=1000', nome: 'Passeio de Lancha na Praia de Pipa', descricao: 'O foco do passeio é te levar a vivenciar um verdadeiro espetáculo natural aquático, tendo como cenário a belíssima costa da Praia da Pipa. Na excursão, iremos sair da Praia do Centro em direção a maravilhosa Praia do Madeiro, passando pela encantadora Baia dos Golfinhos.' },
      { id: '4', foto: 'https://abracepipa.com.br/wp-content/uploads/2021/08/quadriciclo18.jpg', nome: 'Praia Pipa – Barra do Cunhaú', descricao: 'O passeio de quadriciclo começa saindo de Pipa, seguindo em direção ao famoso Chapadão, mirante da Praia do Amor e Pedra da Pipa. Lá, faremos uma parada para fotos e contemplação da paisagem paradisíaca, onde é possível ter uma vista privilegiada do litoral potiguar.'},
      { id: '5', foto: 'https://abracepipa.com.br/wp-content/uploads/2021/08/abracepipa9.jpeg', nome: 'Passeio de Jeep Jubiraca', descricao: 'O Passeio de Jeep Jubiraca, também conhecido de “Pau de Arara” em nosso Jeep Toyota Bandeirante 4×4, vai levar você e seus acompanhantes para conhecer os pontos mais bonitos da região da Pipa em um único dia.' },
    ]
  },
  {
    id: '4',
    nome: 'São Miguel dos Milagres - Alagoas',
    sobre: 'A Praia de São Miguel dos Milagres, em Alagoas, é um recanto tropical onde a natureza parece ter sido especialmente generosa. Sua orla é graciosamente sombreada por coqueiros que balançam ao sabor da brisa marinha, criando um cenário de tranquilidade e beleza. A presença de recifes de coral próximos à costa forma inúmeras piscinas naturais, cujas águas cristalinas convidam para um mergulho relaxante e a observação da vida marinha colorida.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103132/sao-miguel-dos-milagres-alagoas.webp',
    passeios: [
      { id: '1', foto: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/e6/00/a6.jpg', nome: 'Tour a São Miguel dos Milagres partindo de Maragogi com a Costazul Turismo', descricao: 'Este é um passeio de dia inteiro, iniciando pela manhã e voltando no final da tarde. Vamos direto ao nosso ponto de apoio na Praia de São Miguel dos Milagres, onde é possível aproveitar toda a estrutura que o local oferece, além, é claro, que se encantar com as belezas naturais. Os clientes que desejam fazer o passeio para conhecer o peixe boi, são levados até a associação do peixe boi. Você será acompanhado por um guia profissional e terá o embarque e desembarque no hotel em Maragogi informado no ato da reserva.'},
      { id: '2', foto: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/98/70/6e.jpg', nome: 'Passeio Privado à São Miguel dos Milagres ', descricao: 'Esta praia é muito linda e é a segunda praia mais visitada do litoral norte de Alagoas com varias belezas naturais' },
      { id: '3', foto: 'https://emalgumlugardomundo.com.br/wp-content/uploads/2021/08/passeio-para-sao-miguel-dos-milagres-saindo-de-maceio-piscinas-sao-miguel.jpg', nome: 'São Miguel Dos Milagres',descricao: 'Os caminhos que nos levam até São Miguel dos Milagres por si só já é um milagre da natureza. A rota ecológica, como é conhecida, nos encanta já na travessia da balsa no Rio Manguaba, que divide os municípios de Japaratinga, Porto de Pedras e, por último, São Miguel dos Milagres. Praias desertas, imensos coqueirais e pequenas vilas são a magia deste lugar.'},
      { id: '4', foto: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/61/cd/21/por-do-sol-na-praia-do.jpg?w=700&h=400&s=1', nome: 'Praia do Toque ', descricao: 'Passeios as piscinas naturais — Faça um passeio de jangada as piscinas naturais mais lindas do Brasil em Alagoas. Faça um passeio de buggy de dia inteiro pelas praias de São Miguel dos Milagres.' },
      { id: '5', foto: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/56/9e/14/dsc-2136-largejpg.jpg?w=1200&h=1200&s=1', nome: 'Praia do Riacho', descricao: 'A partir da praia você pode fazer passeios para as piscinas naturais com jangadas ou então passar o dia em um dos quiosques simples que ficam na beira do mar. A praia é linda, tem um cenário muito diferente na maré baixa e vale super a pena conhecê-la. Os bancos de areia são deliciosos!'}
    ]
  },
  { 
    id: '5',
    nome: 'Prainhas do Pontal do Atalaia - Rio de Janeiro',
    sobre: 'Situada a cerca de duas horas do Rio de Janeiro, a Prainha do Pontal do Atalaia é um verdadeiro paraíso escondido na famosa Região dos Lagos. Para chegar até esta praia idílica, os visitantes são agraciados com uma descida cênica por uma escadaria de 255 degraus, construída em 2014 para substituir o antigo caminho entre as pedras. Esta praia encantadora, com suas águas cristalinas e areias brancas, é um ponto de encontro privilegiado para amantes do mergulho e da vida marinha. As águas límpidas da região são perfeitas para observar tartarugas marinhas e golfinhos, proporcionando uma experiência mágica e inesquecível.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103138/pontal-do-atalaia-rj-_2_.webp',
    passeios: [
      { id: '1', foto: 'https://imagedelivery.net/EafvxYlk8cSUsWEWsetEdQ/96c17704-1fb7-4991-0484-bc3f51389100/w=1000', nome: 'Passeio de Barco em Arraial do Cabo', descricao: 'O Passeio de Barco em Arraial do Cabo é uma experiência única proporcionada pela Embarcação Vô Felício Tour. A estrutura do barco é incrível, com 2 andares e um amplo segundo andar que oferece visão panorâmica durante todo o passeio.' },
      { id: '2', foto: 'https://i.pinimg.com/736x/e7/72/c5/e772c5fc43043509381a6517832628ba.jpg', nome: 'Prainhas - Gruta do Amor', descricao: 'Localizada no lado esquerdo da praia, ela é composta por uma formação rochosa bastante peculiar, sendo um excelente local para boas fotografias. Diz a lenda que os enamorados que se beijam na Gruta do Amor estão selando sua paixão para sempre; eles nunca mais se separam.'},
      { id: '3', foto: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/bb/8a/22/lado-direito-da-praia.jpg?w=1200&h=1200&s=1', nome: 'Praia Brava', descricao: 'Este paraíso escondido de Arraial do Cabo é realmente incrível. É possível chegar até lá por uma trilha; destaque para as escadarias que dão acesso à praia.'},
      { id: '4', foto: 'https://www.vamostrilhar.com.br/wp-content/uploads/2023/11/Vista-aerea-da-casa-do-ex-prefeito-Prainhas-do-Pontal-do-Atalaia-Arraial-do-Cabo-RJ-Vamos-Trilhar-1024x576.webp', nome: 'Pontal do Atalaia', descricao: 'O Pontal do Atalaia, em Arraial do Cabo, é um dos destinos mais conhecidos e disputados da Região dos Lagos, no estado do Rio de Janeiro. São muitas as atrações para quem gosta de aventura ou simplesmente quer passar um fim de semana para relaxar neste paraíso.'},
      { id: '5', foto: 'https://www.vamostrilhar.com.br/wp-content/uploads/2023/11/Casa-do-ex-prefeito-Prainhas-do-Pontal-do-Atalaia-Arraial-do-Cabo-RJ-Vamos-Trilhar-768x576.webp', nome: 'Pontal do Atalaia', descricao: 'O Pontal do Atalaia é um dos principais cartões postais de Arraial do Cabo e de toda a região. A enorme rocha que avança em direção ao mar revela praias, ilhas e a extensa restinga de Massambaba, além da Lagoa de Araruama. A localização é perfeita para assistir ao pôr do sol.'}
    ]
  },
  {
    id: '6',
    nome: 'Praia de Itacoatiara - Rio de Janeiro',
    sobre: 'Localizada no município de Niterói, a Praia de Itacoatiara é um verdadeiro santuário natural, famosa por suas águas cristalinas e areias douradas. Mas o que realmente a diferencia é a combinação perfeita de tranquilidade e aventura. A praia é dividida em dois trechos: um ideal para o relaxamento e outro perfeito para o surf, com ondas desafiadoras que atraem surfistas de todos os cantos.',
    foto: 'https://cdn.blablacar.com/wp-content/uploads/br/2023/11/05103136/praia-de-itacoatiara-niteroi.webp',
    passeios: [
      { id: '1', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-SZslvtfNK3GilbGqHwe65T-xxmgreiJIQ&s', nome: 'Curta a Prainha de Itacoatiara', descricao: 'A Prainha é um lugar bem menor e mais reservado, e o mar por lá é muito mais calmo e de ondas menores que a praia principal. Ou seja, um verdadeiro convite para sentar e relaxar sozinho, a dois ou com a família. As crianças costumam adorar curtir o dia na Prainha, já que os pais geralmente não veem problema de deixa-las brincando no mar, mais amigável por aqui.'},
      { id: '2', foto: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ef/de/83/vista-da-praia-de-itacoatiara.jpg?w=1200&h=-1&s=1', nome: 'Faça a trilha do Costão de Itacoatiara', descricao: 'Para esse aqui você vai precisar de força na peruca e nas canelas! É isso mesmo, já que a trilha do Costão de Itacoatiara não é tão fácil assim como muita gente gostaria e costuma imaginar. Quem tem um preparo físico menos avantajado pode ter dificuldades ou nem conseguir subir tanto chão. Mas o visual lá é incrível demais, e com certeza vale muito a pena!'},
      { id: '3', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYB_6Cw5n_CTdmVe6jKMm_l5Wd6mLZpA5bg&s', nome: 'Cidade de Niterói', descricao: 'Niterói é menos valorizada e conhecida do ponto de vista turístico do que merece ser. Isso porque é uma cidade tão maravilhosa quanto a capital carioca, mas menor, mais aconchegante, com praias menos lotadas e menos praias bonitas – mas ainda assim, com praias maravilhosas como é o caso de Itacoatiara.'},
      { id: '4', foto: 'https://s2-ge.glbimg.com/RMGWFZrYk8IgcMiQP6r05FLysEs=/0x0:3415x2277/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/7/f/LL3n7tQKALy6qur6etoA/lucas-chumbo-credito-matheus-couto.jpg', nome: 'Pegar umas boas ondas em Itacoá', descricao: 'Itacoatiara é um dos maiores points do surf carioca, principalmente entre os praticantes da modalidade de bodyboard. Isso porque as ondas daqui são perfeitas para este tipo de prática: ondas tubulares e bastante grandes. Muita gente inclusive sustenta que as ondas de Itacoatiara são as maiores de todo o estado do Rio de Janeiro.'},
      { id: '5', foto: 'https://visit.niteroi.br/wp-content/uploads/2018/08/itacotiaraa.jpg', nome: 'Praia de Itacoatiara', descricao: 'Possuindo 700m de extensão e sendo considerada uma das melhores praias da cidade, seu nome significa em Tupi ”pedra escrita, riscada ou que tem inscrição”. Em meio a uma vegetação exuberante, suas águas são transparentes e azuladas. Paraíso dos surfistas, é pequena e uma das mais frequentadas pela juventude, além de oferecer uma rica paisagem. No recanto direito, fica a ”Prainha”, paraíso para as crianças, uma pequeníssima praia protegida das ondas e que apresenta na maior parte do tempo águas calmas.'},
    ]
  },
];

class Inicio extends Component {
  render() {
    return (
      <ScrollView>
      <View style={estilos.fundo}>
          <Menu largura="100%" altura={200} />
          <Text style={estilos.titulo}>PLANEJE SUA VIAGEM</Text>
          <Text style={estilos.texto}>Lugares famosos do Brasil para você aproveitar!</Text>
        <FlatList
          data={lugares}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={estilos.nav}
            onPress={() => this.props.navigation.navigate('Detalhes', { lugar: item })}
            >
            <Image source={{ uri: item.foto }} style={estilos.foto} />
            <View style={estilos.textoContainer}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.sobre}>{item.sobre}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
      </ScrollView>
    );
  }
}

class LugarDetalhes extends Component {
  render() {
    const { route } = this.props;
    const { lugar } = route.params;

    return (
      <ScrollView style={estilos.fundo}>
        <View>
          <Text style={estilos.nome}>{lugar.nome}</Text>
          <Text style={estilos.sobre}>{lugar.sobre}</Text>
        </View>
        <Text style={{ fontSize:18, fontWeight: 'bold', marginTop: 12}}>Passeios </Text>
        <Text style={estilos.sobre}>{lugar.mensagem}</Text>
        <Text>{lugar.detalhes}</Text>

        <FlatList
          data={lugar.passeios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilos.nav}>
              <Image source={{ uri: item.foto }} style={estilos.fotoPasseio} />
              <View style={estilos.textoContainer}>
                <Text style={estilos.nome}>{item.nome}</Text>
                <Text style={estilos.sobre}>{item.descricao}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Bem-vindo" component={Entrar} />
        <Stack.Screen name="Imagens" component={ImagensEntrada} />
        <Stack.Screen name="Início" component={Inicio} />
        <Stack.Screen name="Detalhes" component={LugarDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    padding: 20,
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
  },
  nav: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 15,
  },
  fotoPasseio: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 15,
  },
  textoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sobre: {
    fontSize: 14,
    color: '#555',
    textAlign: 'justify'
  },
  container: {
    margin: 20,
  },
  containerPrincipal: {
    flex: 1,
    padding: 20,
   },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  botao: {
    padding: 10,
    marginTop: 10,
    fontSize: 15,
    backgroundColor: "#87CEFA",
    fontWeight: 'bold',
    borderRadius: 10
  },
  resultadoContainerFundo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  textoResultado: {
    fontSize: 16,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  }
});