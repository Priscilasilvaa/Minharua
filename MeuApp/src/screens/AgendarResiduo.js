import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { datasDisponiveis } from './SelecionarData'; // simula o banco de dados

export default function SelecionarData({ route }) {
  const navigation = useNavigation();
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [localSelecionado, setLocalSelecionado] = useState('O local mais próximo');

  // Obter parâmetros da rota anterior
  const { categoria, usuario } = route.params || {};

  const renderDatas = ({ item }) => {
    const date = new Date(item.data);
    const dia = date.getDate();
    const mes = date.toLocaleDateString('pt-BR', { month: 'short' });
    const selecionado = dataSelecionada === item.data;

    return (
      <TouchableOpacity
        style={[styles.dataBox, selecionado && styles.dataBoxSelecionado]}
        onPress={() => {
          setDataSelecionada(item.data);
          setHorarioSelecionado(null); // reseta horário ao mudar a data
        }}
      >
        <Text style={[styles.diaTexto, selecionado && styles.selecionadoTexto]}>{dia}</Text>
        <Text style={[styles.mesTexto, selecionado && styles.selecionadoTexto]}>{mes}</Text>
      </TouchableOpacity>
    );
  };

  const horarios = dataSelecionada
    ? datasDisponiveis.find((d) => d.data === dataSelecionada)?.horarios || []
    : [];

  const handleConfirmar = () => {
    if (!dataSelecionada || !horarioSelecionado) {
      alert('Por favor, selecione uma data e horário');
      return;
    }

    navigation.navigate('ConfirmarResiduo', {
      categoria,
      usuario,
      data: dataSelecionada,
      horario: horarioSelecionado,
      local: localSelecionado
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Selecione uma data</Text>

      {/* Calendário horizontal com 7 dias disponíveis */}
      <FlatList
        data={datasDisponiveis}
        renderItem={renderDatas}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listaDatas}
        keyExtractor={(item) => item.data}
      />

      <Text style={styles.subtitulo}>Horários disponíveis</Text>
      <View style={styles.linhaHorarios}>
        {horarios.map((h) => (
          <TouchableOpacity
            key={h}
            style={[
              styles.horarioBtn,
              horarioSelecionado === h && styles.horarioSelecionado,
            ]}
            onPress={() => setHorarioSelecionado(h)}
          >
            <Text style={{ color: horarioSelecionado === h ? '#fff' : '#000' }}>{h}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitulo}>Locais disponíveis</Text>
      <TouchableOpacity style={styles.selectLocal}>
        <Text style={styles.localTexto}>{localSelecionado}</Text>
        <Text style={styles.seta}>⌄</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          styles.botaoContinuar,
          (!dataSelecionada || !horarioSelecionado) && styles.botaoDesabilitado
        ]}
        onPress={handleConfirmar}
        disabled={!dataSelecionada || !horarioSelecionado}
      >
        <Text style={styles.textoBotao}>Continuar →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  listaDatas: { paddingBottom: 20 },
  dataBox: {
    width: 60,
    height: 70,
    marginRight: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataBoxSelecionado: {
    backgroundColor: '#FF7020',
    borderColor: '#FF7020',
  },
  diaTexto: { fontSize: 20 },
  mesTexto: { fontSize: 14, color: '#888' },
  selecionadoTexto: { color: '#fff' },
  subtitulo: { fontWeight: 'bold', fontSize: 16, marginTop: 16, marginBottom: 10 },
  linhaHorarios: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  horarioBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 8,
  },
  horarioSelecionado: {
    backgroundColor: '#5F8A76',
    borderColor: '#5F8A76',
  },
  selectLocal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#5F8A76',
    backgroundColor: '#E9F1ED',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  localTexto: { color: '#333' },
  seta: { fontSize: 16, color: '#333' },
  botaoContinuar: {
    backgroundColor: '#FF7020',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  botaoDesabilitado: {
    backgroundColor: '#cccccc',
    opacity: 0.6,
  },
});