import { View, Text, FlatList, Image } from 'react-native';
import Color from '../../Utils/Color';
import SubHeading from '../SubHeading';
import React, { useState, useEffect } from 'react';
import { getCourseList } from '../../Services';
import Ionicons from '@expo/vector-icons/Ionicons'; // import Ionicons from '@expo/vector-icons/Ionicons'; Buradan geliyor!

export default function CourseList({level}) {
    
    const [courseList, setCourseList] = useState([]);

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
            <SubHeading text={level}  />
            <FlatList
                data={courseList}
                key={courseList.id} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{
                        padding: 10,
                        backgroundColor: Color.WHİTE, 
                        marginRight: 15,
                        borderRadius: 15
                    }}>
                        <Image 
                            source={{ uri: item?.banner?.url }}
                            style={{ width: 180, height: 170, borderRadius: 10 }}
                        />
                        <View style={{ padding: 7 }}>
                            <Text style={{
                                fontFamily: 'Outfit-medium',
                                fontSize: 17
                            }}>
                                {item.name}
                            </Text>
                            </View>
                            
                         <View style={{display: 'flex', flexDirection: 'row',
                                justifyContent: 'space-between'}}>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
                              gap: 5,marginTop: 5
                             }}> 
                            <Ionicons name="book" size={18} color="black" />
                            <Text style ={{fontFamily:'Outfit-Medium'}}> {item?.chapters?.length} Seans</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
                              gap: 5,marginTop: 5
                             }}> 
                            <Ionicons name="time-outline" size={18} color="black" />
                            <Text  style ={{fontFamily:'Outfit-Bold'}}>{item?.time}</Text>
                            </View>
                            
                            {/* <Text style={{marginTop: 5,
                                color:Color.GREEN,
                                fontFamily:'Outfit-Medium',
                            }}>{item.free==2500?"Ucretsiz":item.price}</Text> */}
                              
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
