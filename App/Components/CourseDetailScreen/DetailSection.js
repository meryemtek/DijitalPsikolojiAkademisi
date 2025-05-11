import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import Color from '../../Utils/Color'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function DetailSection({ course }) {
  return (
    <ScrollView style={styles.container}>
      {/* Kurs Banner Resmi */}
      <Image 
        source={{ uri: course?.banner?.url }} 
        style={styles.bannerImage}
        resizeMode="cover"
      />
      
      {/* Kurs Başlığı */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{course?.name}</Text>
      </View>
      
      {/* Ayırıcı Çizgi */}
      <View style={styles.divider} />
      
      {/* Kurs Bilgileri */}
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Kurs Bilgileri</Text>
        
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Ionicons name="book-outline" size={24} color={Color.GREEN} />
            <Text style={styles.infoText}>{course?.chapters?.length || 0} Seans</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={24} color={Color.GREEN} />
            <Text style={styles.infoText}>{course?.time || '0'} Saat</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Ionicons name="person-circle-outline" size={24} color={Color.GREEN} />
            <Text style={styles.infoText}>{course?.author || 'Bilinmiyor'}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Ionicons name="cellular-outline" size={24} color={Color.GREEN} />
            <Text style={styles.infoText}>{course?.level || 'Temel'}</Text>
          </View>
        </View>
      </View>
      
      {/* Kurs İçeriği Bölümü */}
     
      
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHİTE,
    borderRadius: 15,
    marginTop: 10,
    padding: 10
  },
  bannerImage: {
    width: Dimensions.get('screen').width * 0.9,
    height: 200,
    borderRadius: 15,
    marginTop: 10,
    alignSelf: 'center'
  },
  titleContainer: {
    padding: 15
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Color.GREEN
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 15,
    marginBottom: 15
  },
  infoContainer: {
    padding: 15
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: Color.GREEN
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333'
  },
  chapterContainer: {
    padding: 15,
    backgroundColor: '#fcfcfc',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15
  },
  chapterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: Color.GREEN,
    elevation: 1
  },
  chapterNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e6f2f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  chapterNumberText: {
    color: Color.GREEN,
    fontWeight: 'bold'
  },
  chapterInfo: {
    flex: 1
  },
  chapterTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333'
  },
  chapterDuration: {
    fontSize: 12,
    color: '#777',
    marginTop: 4
  },
  noContentText: {
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
    padding: 20
  },
  descriptionContainer: {
    padding: 15,
    marginBottom: 20
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555'
  }
});
