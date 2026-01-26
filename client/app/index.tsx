import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../src/components/Button';
import { Input } from '../src/components/Input';
import { Card } from '../src/components/Card';

export default function WelcomeScreen() {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    alert(`Hoş geldin, ${username}!`); 
  };

  return (
    // "bg-background": tailwind.config.js içindeki özel rengimiz
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-background"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
        
        {/* LOGO ALANI */}
        <View className="items-center mb-12">
          {/* font-serif: PlayfairDisplay, text-5xl: Çok büyük yazı, text-primary: Kahverengi */}
          <Text className="font-serif text-5xl text-primary mb-2">
            FocusLobby
          </Text>
          <Text className="font-sans text-lg text-textLight text-center">
            Birlikte üret, birlikte büyü.
          </Text>
        </View>

        {/* FORM ALANI */}
        <View className="w-full px-4"> 
          {/* space-y-4: İçindeki her elemanın arasına dikey boşluk koyar (Müthiş özellik!) */}
          <Card variant='elevated'>
             <View className='space-y-4'>
              <Input 
                label="Kullanıcı Adın"
                placeholder="Örn: kodlayancocuk"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
              <Button 
                title="Lobiye Gir" 
                onPress={handleLogin}
                disabled={!username} 
                />
              </View>
          </Card>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}