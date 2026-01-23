import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../src/theme'; // Temamızı çağırdık!

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FocusLobby</Text>
      <Text style={styles.subtitle}>Dijital çalışma alanına hoş geldin.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Temadan renk
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: typography.fontFamily.serif, // Temadan font
    fontSize: typography.size.xxl,
    color: colors.primary,
    marginBottom: spacing.s,
  },
  subtitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.size.m,
    color: colors.textLight,
  }
});