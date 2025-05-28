import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmarResiduo() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agendamento Confirmado</Text>

      <View style={styles.checkContainer}>
        <Image
          source={require('../assets/check.png')} // ícone de check (adicione esse asset ao projeto)
          style={styles.checkIcon}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.label}>Tipo de resíduo</Text>
          <Text style={styles.value}>Lixo eletrônico</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Data</Text>
          <Text style={styles.value}>28 de Abril de 2025</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Horário</Text>
          <Text style={styles.value}>09:30h - 11:30h da Manhã</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.item}>
          <Text style={styles.label}>Pontos</Text>
          <Text style={styles.points}>+100 pontos</Text>
        </View>
      </View>

      <Text style={styles.confirmationMessage}>
        Seu agendamento foi confirmado com sucesso!
      </Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.primaryButtonText}>Voltar para o início</Text>
      </TouchableOpacity>

      {/* Menu inferior fixo */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Denúncia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  checkContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  checkIcon: {
    width: 80,
    height: 80,
  },
  card: {
    borderWidth: 1,
    borderColor: '#024731',
    borderRadius: 16,
    padding: 20,
    backgroundColor: '#F4F7F5',
    marginBottom: 20,
  },
  item: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#222',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#024731',
    marginVertical: 10,
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#027A48',
  },
  confirmationMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  primaryButton: {
    backgroundColor: '#FF6A28',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#D7E6DB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    color: '#000',
  },
  menuTextActive: {
    fontSize: 12,
    color: '#024731',
    fontWeight: 'bold',
  },
});
