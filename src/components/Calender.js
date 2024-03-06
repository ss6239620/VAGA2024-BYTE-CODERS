import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../constant/index';

const Calendar = ({setModal}) => {
    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate(); // Get the day of the month

    // Get the current month and year
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get the number of days in the current month
    const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // Get the first day of the month (0-6, where 0 is Sunday)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Generate an array of dates for the current month
    const daysOfMonth = Array.from({ length: numDaysInMonth }, (_, index) => index + 1);

    // Generate an array of days to display in the calendar
    const calendarDays = [...Array(firstDayOfMonth).fill(null), ...daysOfMonth];

    function handleClick(day) {
        day===currentDay?setModal(true):null
    }

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {calendarDays.map((day, index) => (
                <View style={[styles.dateContainer]} key={index}>
                    <View style={[day === currentDay ? styles.todayHighlight : null,]}>
                        <Text onPress={()=>{handleClick(day)}} style={[index === 3 ? styles.blueText : styles.bigText,day === currentDay ? styles.textData : null]}>{day}</Text>
                    </View>
                    <Text style={[styles.smallText, { color: index === 3 ? blueText.color : grayText.color }]}>
                        {day ? days[(index + firstDayOfMonth) % 7] : ''}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    dateContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    todayHighlight: {
        backgroundColor: colorTheme.primaryColor,
        width:30,
        borderRadius:60,
        height:30
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
    textData:{
        color:'#fff',
        textAlign:'center'
    }
});
