import axios from 'axios'

export const restCountry = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})