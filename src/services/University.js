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

export const universityService = { getUniversityName }