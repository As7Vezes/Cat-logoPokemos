import axios from "axios";

export const apiAll = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export const apiGet = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/{id}'
})