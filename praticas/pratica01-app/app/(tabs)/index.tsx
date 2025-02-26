import { Image, StyleSheet, Platform, useColorScheme } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Objeto</ThemedText>
      </ThemedView>

          <ThemedView style={styles.fundoImagens}>
            <Image source={require('@/assets/images/fusca.jpg')} style={styles.imagens}></Image>
            <ThemedText type="defaultSemiBold"><strong>   VW - Fusca</strong></ThemedText>
            <ThemedText type="defaultSemiBold"><strong>   Ano: </strong>1980</ThemedText>
            <ThemedText type="defaultSemiBold"><strong>   Cor: </strong>Azul</ThemedText>
          </ThemedView>

          <ThemedView style={styles.fundoImagens}>
            <Image source={require('@/assets/images/gool.webp')} style={styles.imagens}></Image>
            <ThemedText type="defaultSemiBold"><strong>   VW - Gol</strong></ThemedText>
            <ThemedText type="defaultSemiBold"><strong>   Ano: </strong>2010</ThemedText>
            <ThemedText type="defaultSemiBold"><strong>   Cor: </strong>Vermelho</ThemedText>
          </ThemedView>

          <ThemedView style={styles.fundoImagens}>
            <Image source={require('@/assets/images/Landau.avif')} style={styles.imagens}></Image>
            <ThemedText type="defaultSemiBold"><strong>   Ford - Landau</strong></ThemedText>
            <ThemedText type="defaultSemiBold"><strong>   Ano: </strong>1980</ThemedText>
            <ThemedText type="defaultSemiBold"><strong>   Cor: </strong>Preto</ThemedText>
          </ThemedView>
        
          <ThemedView style={styles.fundoImagens}>
            <Image source={require('@/assets/images/Roadster.webp')} style={styles.imagens}></Image>
            <ThemedText type="defaultSemiBold"><strong>   Audi - TT Roadster</strong></ThemedText>
            <ThemedText type="defaultSemiBold"><strong>   Ano: </strong>2022</ThemedText>
            <ThemedText type="defaultSemiBold"><strong>   Cor: </strong>Branco</ThemedText>
          </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
    padding: 20,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.3)', /*sombra*/
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  fundoImagens: {
    padding: 0,
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    height: 'auto',
    width: '100%', /* Largura 100% do contêiner pai */
    maxWidth: 350, /* Limita o tamanho da imagem*/
  },
  imagens: {
    width: '100%',
    height: 'auto', 
    aspectRatio: 2, /* Manter a proporção da imagem */
    maxWidth: 350, /* Limita o tamanho da imagem*/
    borderRadius: 10,
  },
});