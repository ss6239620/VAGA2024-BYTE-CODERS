import axios from "axios";
import { API_URL, API_URL_AIML, COMMON_JWT } from "../constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getUniversityName() {
    const config = {
        headers: {
            'auth-token': COMMON_JWT,
        }
    }

    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/university/getuniversityname`, config)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function upComingInteview() {
    const config = {
        headers: {
            'auth-token': COMMON_JWT,
        }
    }

    console.log('in company');
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/company/getmycompany`, config)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function getQuiz() {

    console.log('in quiz');
    return new Promise((resolve, reject) => {
        axios.get(`https://aptitude-api.vercel.app/Random`)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function getMixQuiz() {

    console.log('in mix quiz');
    return new Promise((resolve, reject) => {
        axios.get(`https://aptitude-api.vercel.app/MixtureAndAlligation`)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function getProfitLoss() {

    console.log('in mix quiz');
    return new Promise((resolve, reject) => {
        axios.get(`https://aptitude-api.vercel.app/ProfitAndLoss`)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function getPermute() {

    console.log('in mix quiz');
    return new Promise((resolve, reject) => {
        axios.get(`https://aptitude-api.vercel.app/PermutationAndCombination`)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function getSimpleIntrest() {

    console.log('in mix quiz');
    return new Promise((resolve, reject) => {
        axios.get(`https://aptitude-api.vercel.app/SimpleInterest`)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function getAgeQuiz() {

    console.log('in mix quiz');
    return new Promise((resolve, reject) => {
        axios.get(`https://aptitude-api.vercel.app/Age`)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

export const universityService = { getUniversityName, upComingInteview, getQuiz, getMixQuiz, getProfitLoss,getPermute,getSimpleIntrest,getAgeQuiz }