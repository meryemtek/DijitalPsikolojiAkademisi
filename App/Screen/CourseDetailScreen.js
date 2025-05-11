import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import Color from '../Utils/Color';

export default function CourseDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { courseId, course } = route.params || {};

    useEffect(() => {
        console.log('Course data:', course);
    }, [course]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Color.GREEN} />
            
            {/* Başlık ve Geri Butonu */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color={Color.BLACK} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Kurs Detayı</Text>
                <View style={{width: 24}} />
            </View>
            
            {/* Kurs Detay İçeriği */}
            {course && <DetailSection course={course} />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        elevation: 2,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.BLACK,
    }
});
