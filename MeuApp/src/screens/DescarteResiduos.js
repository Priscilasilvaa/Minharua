// src/screens/SelecionarResiduo.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const categorias = [
  { id: '1', nome: 'Entulho de Obras', cor: '#F9C8C8', icone: '⚠️' },
  { id: '2', nome: 'Material eletrônico', cor: '#FCDACF', icone: '🔌' },
  { id: '3', nome: 'Móveis', cor: '#FDF1AC', icone: '🪑' },
  { id: '4', nome: 'Galhos e folhas', cor: '#D5C2AC', icone: '🌿' },
  { id: '5', nome: 'Recicláveis', cor: '#C8E8D4', icone: '♻️' },
];

export default function SelecionarResiduo({ route }) {
  const navigation = useNavigation();
  const { usuario, tipoColeta } = route.params || {};

  const handleCategoriaPress = (categoria) => {
    navigation.navigate('AgendarResiduo', { 
      categoria,
      usuario: usuario || 'Usuário Padrão',
      tipoColeta: tipoColeta || 'regular' 
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.card, { borderColor: '#5F8A76' }]} 
      onPress={() => handleCategoriaPress(item)}
    >
      <View style={[styles.iconeContainer, { backgroundColor: item.cor }]}>
        <Text style={styles.icone}>{item.icone}</Text>
      </View>
      <Text style={styles.nome}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quer solicitar um descarte?</Text>

      {/* Etapas */}
      <View style={styles.etapas}>
        <View style={styles.bolinhaSelecionada}><Text style={styles.bolinhaTexto}>1</Text></View>
        <View style={styles.bolinha}><Text style={styles.bolinhaTexto}>2</Text></View>
        <View style={styles.bolinha}><Text style={styles.bolinhaTexto}>3</Text></View>
      </View>

      <Text style={styles.subtitulo}>Selecione o tipo de resíduo:</Text>

      <FlatList
        data={categorias}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        contentContainerStyle={{ paddingBottom: 24 }}
      />

      <TouchableOpacity style={styles.botaoContinuar}>
        <Text style={styles.textoBotao}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 40, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  etapas: { flexDirection: 'row', marginBottom: 24, alignItems: 'center', gap: 10 },
  bolinhaSelecionada: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#5F8A76', justifyContent: 'center', alignItems: 'center' },
  bolinha: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E1E1E1', justifyContent: 'center', alignItems: 'center' },
  bolinhaTexto: { color: '#fff', fontWeight: 'bold' },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  linha: { justifyContent: 'space-between', marginBottom: 16 },
  card: {
    width: '48%',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeContainer: { width: 36, height: 36, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  icone: { fontSize: 18 },
  nome: { fontSize: 14, fontWeight: '600', flexShrink: 1 },
  botaoContinuar: {
    backgroundColor: '#FF7020',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
