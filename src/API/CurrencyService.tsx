import axios from "axios";

export default class CurrencyList{
    static async getAll() {
        try{
            const responce = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
            return responce.data
        } catch (e) {
            console.log(e)
        }
        
    }
    static async getRelative(){
        try{
            const responce = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
            // console.log(responce.data.eur)
            return responce.data.eur
        } catch (e) {
            console.log(e)
        }
    }
}
