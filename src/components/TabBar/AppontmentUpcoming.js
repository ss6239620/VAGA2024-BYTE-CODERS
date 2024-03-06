import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { blackText, blueText, colorTheme, grayText } from '../../constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoctorCard from '../../components/DoctorCard'
import Calendar from '../Calender'
import NotificationModal from '../Modal/NotificationModal'

const days = ["Mon", "Tue", "Wed", "Th", "Fr", "Sat", "Sun"]
export default function Appointment({ navigation }) {
  const [notidicationModal, setnotidicationModal] = useState(false);
  const date = new Date().getDate()
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subContainer}>
            <Text style={[styles.smallText, { marginTop: 10 }]}>Apr 08,2022</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={styles.bigText}>Today</Text>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: 96, height: 30, backgroundColor: colorTheme.primaryColor, borderRadius: 50 }}>
                <MaterialCommunityIcons name="plus-thick" color="white" size={15} />
                <Text style={[styles.smallText, { color: "white", marginLeft: 5 }]}>Add</Text>
              </View>
            </View>
            <Calendar setModal={setnotidicationModal}/>
            <Text style={[styles.bigText, { marginTop: 15 }]}>Remainder</Text>
            <Text style={styles.smallText}>Dont forget schedule for upcoming appointment </Text>
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <DoctorCard navigation={navigation} isButtonRequired />
            </View>
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <DoctorCard navigation={navigation} isButtonRequired />
            </View>
          </View>
        </ScrollView>
      </View>
      {notidicationModal
        ?
        <NotificationModal modalVisible={notidicationModal} setModalVisible={setnotidicationModal} />
        : null
      }

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.appBackGroundColor
  },
  subContainer: {
    width: "90%",
    height: "auto",
    alignSelf: "center",
    // backgroundColor:"red"
  },
  bigText: {
    fontSize: blackText.fontSize,
    color: blackText.color,
    fontWeight: blackText.fontWeight
  },
  smallText: {
    fontSize: grayText.fontSize,
    color: grayText.color,
    fontWeight: grayText.fontWeight
  },
  blueText: {
    fontSize: blueText.fontSize,
    color: blueText.color,
    fontWeight: blueText.fontWeight
  },
})