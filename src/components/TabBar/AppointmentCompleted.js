import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { blackText, blueText, color, colorTheme, grayText } from '../../constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoctorCompletedCard from '../../components/DoctorCompletedCard'
import { upComingData } from '../../assets/data/UniversityData'
import Icon from 'react-native-vector-icons/FontAwesome'
import { sendEmail } from '../EmailAndSMS'

const days = ["Mon", "Tue", "Wed", "Th", "Fr", "Sat", "Sun"]
export default function Appointment() {
  function parseDateTimeString(dateTimeString) {
    // Split the string into date and time parts
    const [datePart, timePart] = dateTimeString.split('T');

    // Parse the date
    const dateArray = datePart.split('-');
    const year = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]);
    const day = parseInt(dateArray[2]);

    // Parse the time
    const timeArray = timePart.split(':');
    const hour = parseInt(timeArray[0]);
    const minute = parseInt(timeArray[1]);
    const second = parseInt(timeArray[2].split('.')[0]); // remove milliseconds

    // Get the day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = new Date(year, month - 1, day).getDay();

    // Format the date and time
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hour}:${minute}:${second}`;

    return {
      date: formattedDate,
      time: formattedTime,
      dayOfWeek: daysOfWeek[dayOfWeek]
    };
  }
  function handleClick(params) {
    sendEmail(
      'ss6239620@gmail.com',
      'Greeting!',
      'I respectfully request to reschedule my upcoming interview for the placement position. Unfortunately, a sudden family emergency has arisen, necessitating my immediate attention. I am genuinely enthusiastic about the opportunity and remain fully committed to participating in the interview process. I kindly ask for your understanding and flexibility in arranging an alternative date and time. I assure you of my dedication to this role and am eager to demonstrate my qualifications at a later date. Thank you for considering my request and for your understanding during this challenging time.'
    ).then(() => {
      console.log('Our email successful provided to device mail ');
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
        {upComingData.map((_, index) => (
                <View key={index} style={{ marginTop: 15, marginBottom: 15 }}>

                  <Pressable
                    // onPress={()=>{isNavigate?navigation.navigate('DoctorDetail'):null}}
                    style={styles.card}>
                    <View style={{ flexDirection: 'row', margin: 15 }}>
                      <View style={{ marginRight: 12 }}>
                        <View style={{ marginBottom: 8 }}>
                          <Text style={styles.boldText}>{_.name}</Text>
                          <Text style={styles.smallText}>{_.job_role}</Text>
                        </View>
                      </View>
                      <Image source={require('../../assets/img/corpo.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.subCard}>
                      <View style={{ flexDirection: "row" }}>
                        <Icon name="calendar" color={colorTheme.primaryColor} size={20} style={{ marginRight: 5 }} />
                        {/* <Text style={styles.smallText}>Monday, Dec 23</Text> */}
                        <Text style={styles.smallText}>{parseDateTimeString(_.date).dayOfWeek}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <MaterialCommunityIcons name="clock-time-four-outline" color={colorTheme.primaryColor} size={20} style={{ marginRight: 5 }} />
                        <Text style={styles.smallText}>{parseDateTimeString(_.date).time}</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{ backgroundColor: colorTheme.primaryColor, width: '90%', height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colorTheme.borderColor, alignSelf: 'center', marginBottom: 14 }}
                      onPress={() => { handleClick() }}
                    >
                      <Text style={{ color: "white" }}>Apply</Text>
                    </TouchableOpacity>
                  </Pressable>
                </View>
              ))}
        </View>
      </ScrollView>
    </View>
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
  image: {
    width: '40%',
    height: '130%',
    borderRadius: 150 / 2,
  },
  card: {
    backgroundColor: colorTheme.appBackGroundColor,
    height: "auto",
    borderRadius: 10,
    elevation: 5,
  },
  subCard: {
    margin: 15,
    height: 50,
    backgroundColor: "#deecfa",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 30
  },
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
})