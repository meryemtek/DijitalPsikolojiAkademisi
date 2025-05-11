import { View, Text, FlatList, Image, Touchable, TouchableOpacity } from 'react-native';
import Color from '../../Utils/Color';
import SubHeading from '../SubHeading';
import React, { useState, useEffect } from 'react';
import { getCourseList } from '../../Services';
import Ionicons from '@expo/vector-icons/Ionicons'; // import Ionicons from '@expo/vector-icons/Ionicons'; Buradan geliyor!
import CourseItem from './CourseItem';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({level}) {
    
    const [courseList, setCourseList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
       
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
          console.log('getCourses çağrıldı 🎯');
          const resp = await getCourseList(); // "sosyalPsikoloji" parametresi kaldırıldı
          console.log('RESP: ', resp);
          setCourseList(resp?.courses || []);
        } catch (error) {
          console.error('getCourses Hata:', error);
        }
      };
      
    

    return (
        <View>
            <SubHeading text={level+" "}  />
            <FlatList
                data={courseList}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('course-detail', { 
                        courseId: item.id,
                        course: item 
                    })}>
                      <CourseItem item={item} /> 
                    </TouchableOpacity>  
                )}
            />
        </View>
    );
}
