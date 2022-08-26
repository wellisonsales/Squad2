import axios from "axios";

const api = axios.create({
  baseURL: "https://chef-dev.herokuapp.com/",
});

export async function getReservas (endpoint) {
const response = await api.get(`${endpoint}`)
const dados = response.dados.reservas
    return dados
}
