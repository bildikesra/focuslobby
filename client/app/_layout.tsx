import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { 
  PlayfairDisplay_400Regular, 
  PlayfairDisplay_700Bold 
} from '@expo-google-fonts/playfair-display';
import { 
  Poppins_400Regular, 
  Poppins_600SemiBold 
} from '@expo-google-fonts/poppins';
import { useEffect } from 'react';
import { View } from 'react-native';

// Fontlar yüklenene kadar açılış ekranını (Splash) beklet
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'PlayfairDisplay-Regular': PlayfairDisplay_400Regular,
    'PlayfairDisplay-Bold': PlayfairDisplay_700Bold,
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Bold': Poppins_600SemiBold,
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null; // Fontlar yüklenmeden hiçbir şey gösterme
  }

  // Stack: Sayfalar arası geçiş yapısı (Navigation)
  return (
    <Stack screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="index" />
    </Stack>
  );
}