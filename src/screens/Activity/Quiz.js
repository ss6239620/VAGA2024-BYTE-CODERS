import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../../components/Header';
import RadioButton from '../../components/RadioButton';

export default Quiz = () => {
    const [selected, setselected] = useState('')

    const handleRadioButton = (option) => {
        setselected(option === selected ? null : option)
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header leftIconName header={'Practice With Quiz'} titleMargin={30} />
            </View>
            {/* Main Content */}
            <View style={styles.content}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.bigText, { fontSize: 25 }]}>what is the capital of india?</Text>
                </View>
                {[1, 2, 3, 4].map((_, index) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => { handleRadioButton(_) }}>
                            <RadioButton selected={_ === selected} />
                        </TouchableOpacity>
                        <Text style={[styles.smallText, { fontSize: 17, color: 'black' }]}>option 1</Text>
                    </View>
                ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={{ backgroundColor: colorTheme.primaryColor, width: "90%", height: 40, borderRadius: 50, justifyContent: "center", marginBottom: 10 }}
                // onPress={() => navigation.navigate('PatientDetails')}
                >
                    <Text style={[styles.smallText, { color: "white", alignSelf: 'center' }]}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorTheme.appBackGroundColor,
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 5
    },
    content: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        // justifyContent:'center',
        // alignItems:'center'
        marginTop: 80

    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
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
    textInput: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 7,
        borderWidth: 1,
        borderColor: "#d3d2d6",
        height: 200,
        textAlignVertical: 'top',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: colorTheme.primaryColor
    },
});

