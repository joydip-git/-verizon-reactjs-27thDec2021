import axios from "axios";
const baseUrl = 'http://localhost:3001/products'

export function getProducts() {
    return axios.get(baseUrl)
}

export function getProductById(pid) {
    return axios.get(`${baseUrl}/${pid}`)
}

export function deleteProductById(pid) {
    return axios.delete(`${baseUrl}/${pid}`)
}

export function addProduct(productObject) {
    return axios.post(baseUrl, productObject)
}

export function updateProduct(productObject, pid) {
    return axios.put(`${baseUrl}/${pid}`, productObject)
}