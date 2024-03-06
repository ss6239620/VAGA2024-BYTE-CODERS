import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../../components/Header';
import RadioButton from '../../components/RadioButton';
import { universityService } from '../../services/University';

export default Quiz = () => {
    const [selected, setselected] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [prompt, setPrompt] = useState('');
    const [quiz, setQuiz] = useState({});
    const [loading, setLoading] = useState(true);

    const handleRadioButton = (option) => {
        setselected(option === selected ? null : option);
        setUserAnswer(option);
    };

    useEffect(() => {
        fetchQuiz();
    }, []);

    const fetchQuiz = () => {
        setLoading(true);
        universityService.getAgeQuiz().then((res) => {
            // console.log(res.data);
            setQuiz(res.data);
            setLoading(false);
        });
    };

    const handleNextQuestion = () => {
        setselected('');
        setUserAnswer('');
        setPrompt('');
        fetchQuiz();
    };

    function handleSubmit() {
        userAnswer === quiz.answer ? setPrompt('Right Answer') : setPrompt('Wrong Answer');
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header leftIconName header={'Age Atpitude'} titleMargin={30} />
            </View>
            {/* Main Content */}
            {loading ? <ActivityIndicator /> : (
                <ScrollView contentContainerStyle={styles.content}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={[styles.bigText, { fontSize: 25 }]}>{quiz.question}</Text>
                    </View>
                    {quiz.options.map((_, index) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }} key={index}>
                            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => { handleRadioButton(_) }}>
                                <RadioButton selected={_ === selected} />
                            </TouchableOpacity>
                            <Text style={[styles.smallText, { fontSize: 17, color: 'black' }]}>{_}</Text>
                        </View>
                    ))}
                    {prompt !== '' ?
                        prompt === 'Wrong Answer' ?
                            <View>
                                <Text>{prompt}</Text>
                                <Text>{quiz.explanation}</Text>
                            </View>
                            : <Text>{prompt}</Text>
                        : null}
                </ScrollView>
            )}
                
            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={{ backgroundColor: colorTheme.primaryColor, width: "90%", height: 40, borderRadius: 50, justifyContent: "center", marginBottom: 10 }}
                    onPress={handleSubmit}
                >
                    <Text style={[styles.smallText, { color: "white", alignSelf: 'center' }]}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: "90%", height: 40, borderRadius: 50, justifyContent: "center" }}
                    onPress={handleNextQuestion}
                >
                    <Text style={[styles.smallText, { color: colorTheme.primaryColor, alignSelf: 'center' }]}>Next Question</Text>
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
        marginTop: 50
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
