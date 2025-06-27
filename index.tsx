import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

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
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome To Money Gains!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">My passion</ThemedText>
        <ThemedText>
          I love to workout I workout 4 to 5 times a week I find myself going as thearpy. I am someone who goes to the gym because it is the only thing they are good at. I think the gym is fun and is my favorite thing to do.
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">My role in SCLA</ThemedText>
        <ThemedText>
          {`I want to become a great leader I dont think coding will ever be a big passion to me but I can defiently lead. I find myself wanting to have pressure and higher standards as I strive for better this is why I want a be a leader someone who can be helpful with all. I have always been good at being patient and understanding situations and time manamgenmt and I really think this is why I would be a great leader.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">My Dream Career</ThemedText>
        <ThemedText>
          {`My dream carrer is something in engineering I dont know which type yet but I defiently want to get this degree at UCLA  `}
          <ThemedText type="defaultSemiBold">I have always found it most intresting aswell the pay is very good and I only have to attened college for 4 years. I have always been good with numbers and this is also something that I am passionatie about I think my number 1 choice so far has to be Aerospace engineering I think as I find it the most intresting and my favorite one.</ThemedText> 
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
