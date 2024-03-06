import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { blackText, blueText, colorTheme, grayText } from '../../constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/FontAwesome'
import DoctorCard from '../../components/DoctorCard'
import Calendar from '../Calender'
import NotificationModal from '../Modal/NotificationModal'
import { upComingData } from '../../assets/data/UniversityData'
// import { universityService } from '../../services/University'

const days = ["Mon", "Tue", "Wed", "Th", "Fr", "Sat", "Sun"]
export default function Appointment({ navigation }) {
  const [notidicationModal, setnotidicationModal] = useState(false);
  // const [data, setdata] = useState([])
  const [loading, setLoading] = useState(false)
  const date = new Date().getDate()

  // async function getData(params) {
  //   try {
  //     const res = await universityService.upComingInteview();
  //     setdata(res.data);
  //     console.log(res.data);
  //     setLoading(false);
  //   } catch (error) {
  //     // Handle errors here
  //     console.error("Error fetching data:", error);
  //   }
  // }


  // useEffect(() => {
  //   getData()
  // }, [])

  // useEffect(() => {
  //   console.log(data); // Move the console.log here
  // }, [data]);

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

  return (
    <>
      {loading ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View> :
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
              <Calendar setModal={setnotidicationModal} />
              <Text style={[styles.bigText, { marginTop: 15 }]}>Remainder</Text>
              <Text style={styles.smallText}>Dont forget schedule for upcoming appointment </Text>
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
                  </Pressable>
                </View>
              ))}

            </View>

          </ScrollView>
        </View>
      }
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