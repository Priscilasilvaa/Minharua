import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Oi, Renata!</Text>
          <Text style={styles.subHeaderText}>O que vamos fazer hoje?</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
        <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('DescarteResiduo')} // Nome da rota alterado
            >
            <Icon name="schedule" size={24} color="#2E7D32" />
            <Text style={styles.actionButtonText}>Agendar coleta</Text>
            </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Report')}
          >
            <Icon name="report" size={24} color="#D32F2F" />
            <Text style={styles.actionButtonText}>Denunciar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigation('IPTU')}
          >
            <Icon name="receipt" size={24} color="#1976D2" />
            <Text style={styles.actionButtonText}>Ver IPTU</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Activities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suas atividades:</Text>
          
          <View style={styles.activityItem}>
            <View style={styles.checkbox}>
              <Icon name="check-box-outline-blank" size={24} color="#555" />
            </View>
            <Text style={styles.activityText}>Descarte agendado</Text>
          </View>
          
          <View style={styles.activityItem}>
            <View style={styles.checkbox}>
              <Icon name="check-box-outline-blank" size={24} color="#555" />
            </View>
            <View>
              <Text style={styles.activityText}>Descarte de resíduo eletrônico</Text>
              <Text style={styles.activitySubText}>@ Piso 1 do Shopping Rio Mar</Text>
              <Text style={styles.activitySubText}>18/05/2025 às 12:30h</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Capibaras Section */}
        <View style={styles.capibarasSection}>
          <View style={styles.capibarasHeader}>
            <Svg height="30" width="30" style={styles.capibarasIcon}>
              <Circle cx="15" cy="15" r="12" fill="#4CAF50" />
              <SvgText
                x="15"
                y="20"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                5
              </SvgText>
            </Svg>
            <Text style={styles.capibarasTitle}>Capibas coletadas</Text>
          </View>
          
          <Text style={styles.capibarasCount}>750</Text>
          
          <View style={styles.capibarasProgress}>
            <View style={styles.progressItem}>
              <Icon name="check-circle" size={20} color="#4CAF50" />
              <Text style={styles.progressText}>+ 50 na semana</Text>
            </View>
            <View style={styles.progressItem}>
              <Icon name="check-circle" size={20} color="#4CAF50" />
              <Text style={styles.progressText}>✔️</Text>
            </View>
          </View>
          
          <Text style={styles.capibarasFooter}>
            Só mais 200 para desconto no IPTU
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#666',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    width: '30%',
  },
  actionButtonText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  checkbox: {
    marginRight: 12,
  },
  activityText: {
    fontSize: 16,
    color: '#333',
  },
  activitySubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  capibarasSection: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
  },
  capibarasHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  capibarasIcon: {
    marginRight: 8,
  },
  capibarasTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  capibarasCount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 8,
  },
  capibarasProgress: {
    alignSelf: 'stretch',
    marginVertical: 8,
  },
  progressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  capibarasFooter: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Home;