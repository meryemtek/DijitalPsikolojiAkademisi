import { View, Text, FlatList, Image } from 'react-native';
import Color from '../Utils/Color';
import SubHeading from './SubHeading';
import React, { useState, useEffect } from 'react';
import { getCourseList } from '../Services';
import Ionicons from '@expo/vector-icons/Ionicons'; // import Ionicons from '@expo/vector-icons/Ionicons'; Buradan geliyor!

export default function CourseList() {
    
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
       
        getCourses();
    }, []);

    const getCourses = async () => {
      try {
        console.log('getCourses çağrıldı 🎯');
        const resp = await getCourseList("sosyalPsikoloji");

        console.log('RESP: ', resp);
        setCourseList(resp?.courses || []);
      } catch (error) {
        console.error('getCourses Hata:', error);
      }
    };
    

    return (
        <View>
            <SubHeading text={'Önerilen Kurslar'} />
            <FlatList
                data={courseList}
                key={courseList.id} // Buraya doğru şekilde id veriyoruz
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{
                        padding: 10,
                        backgroundColor: Color.WHİTE, // Doğru hali WHITE
                        marginRight: 15,
                        borderRadius: 15
                    }}>
                        <Image 
                            source={{ uri: item?.banner?.url }}
                            style={{ width: 180, height: 150, borderRadius: 10 }}
                        />
                        <View style={{ padding: 7 }}>
                            <Text style={{
                                fontFamily: 'Outfit-medium',
                                fontSize: 17
                            }}>
                                {item.name}
                            </Text>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
                              gap: 5,marginTop: 5
                             }}> 
                            <Ionicons name="book" size={18} color="black" />
                            <Text>{item?.chapters?.lenght}4 Seans</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
                              gap: 5,marginTop: 5
                             }}> 
                            <Ionicons name="time-outline" size={18} color="black" />
                            <Text>{item?.time}</Text>
                            </View>
                              
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
