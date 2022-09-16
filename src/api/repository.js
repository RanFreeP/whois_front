import api from "@/api/index";

const API_URL = 'http://whois_api.loc/api'


export default {
    whois(params) {
        return api.post(API_URL + '/search', params)
    },
}