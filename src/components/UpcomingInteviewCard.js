import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { color, colorTheme } from '../constant'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

export default function DoctorCard({ isNavigate, isButtonRequired, item }) {
    const navigation = useNavigation()
    return (
        <Pressable
            // onPress={()=>{isNavigate?navigation.navigate('DoctorDetail'):null}}
            style={styles.card}>
            <View style={{ flexDirection: 'row', margin: 15 }}>
                <View style={{ marginRight: 12 }}>
                    <View style={{ marginBottom: 8 }}>
                        <Text style={styles.boldText}>SubhChintak Techno</Text>
                        <Text style={styles.smallText}>Service Based Company</Text>
                    </View>
                </View>
                <Image source={require('../assets/img/corpo.jpg')} style={styles.image} />
            </View>
            <View style={styles.subCard}>
                <View style={{ flexDirection: "row" }}>
                    <Icon name="calendar" color={colorTheme.primaryColor} size={20} style={{ marginRight: 5 }} />
                    <Text style={styles.smallText}>Monday, Dec 23</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <MaterialIcon name="clock-time-four-outline" color={colorTheme.primaryColor} size={20} style={{ marginRight: 5 }} />
                    <Text style={styles.smallText}>12:00-13:00</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    grayText: {
        fontSize: 17,
        fontWeight: '700',
        color: "gray"
    },
    boldText: {
        fontSize: 17,
        fontWeight: '700',
        color: "black"
    },
    smallText: {
        fontSize: 12,
        fontWeight: '500',
        color: "black"
    },
    card: {
        backgroundColor: colorTheme.appBackGroundColor,
        height: "auto",
        borderRadius: 10,
        elevation: 5
    },
    image: {
        width: '40%',
        height: '130%',
        borderRadius: 150 / 2,
    },
    subCard: {
        margin: 15,
        height: 50,
        backgroundColor: "#deecfa",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 30
    }
})