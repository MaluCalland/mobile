import { Image, StyleSheet, Platform, useColorScheme } from 'react-native';

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
        <ThemedText type="title" style={styles.customTextTitulo}>Objeto</ThemedText>
      </ThemedView>

          <ThemedView style={styles.fundoImagens}>
            <Image source={require('@/assets/images/fusca.jpg')} style={styles.imagens}></Image>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   VW - Fusca</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Ano: 1980</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Cor: Azul</ThemedText>
          </ThemedView>

          <ThemedView style={styles.fundoImagens}>
            <Image source={require('@/assets/images/gool.webp')} style={styles.imagens}></Image>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   VW - Gol</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Ano: 2010</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Cor: Vermelho</ThemedText>
          </ThemedView>

          <ThemedView style={styles.fundoImagens}>
            <Image source={require('@/assets/images/Landau.avif')} style={styles.imagens}></Image>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Ford - Landau</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Ano: 1980</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Cor: Preto</ThemedText>
          </ThemedView>
        
          <ThemedView style={styles.fundoImagens}>
            <Image source={require('@/assets/images/Roadster.webp')} style={styles.imagens}></Image>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Audi - TT Roadster</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Ano: 2022</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.customTextBody}>   Cor: Branco</ThemedText>
          </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  customTextTitulo: {
    fontFamily: 'SpaceMono',
    fontSize: 30,
  },
  customTextBody: {
    fontFamily: 'Krona One', 
    fontSize: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
    padding: 20,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.3)', 
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
    width: '100%', 
    maxWidth: 350, 
  },
  imagens: {
    width: '100%',
    height: 'auto', 
    aspectRatio: 2,
    maxWidth: 350, 
    borderRadius: 10,
  },
});