import React from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../Header';
import WebView from 'react-native-webview';
import { YoutubeModalData } from '../../assets/data/YoutubeData';
import UpcomingInteviewCard from '../UpcomingInteviewCard'


const UpcomingInterviewModal = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Header leftIconName header={'Supportive Content'} titleMargin={40} isModal setModalVisible={setModalVisible} />
                </View>
                {/* Main Content */}
                <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                    {[1, 2, 3, 4, 5].map((data, index) => (
                        <View key={index} style={{marginVertical:5}}>
                            <UpcomingInteviewCard />
                        </View>
                    ))}

                </ScrollView>
                {/* Footer */}
                <View style={styles.footer}>
                </View>
            </View>
        </Modal >
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
        marginTop: 20
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

export default UpcomingInterviewModal;
