import Vue from 'vue'
import Vuex from 'vuex'
import repository from "@/api/repository";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        whois: {
            state: () => ({
                domainInfo: []
            }),
            getters: {
                domainInfo: state => state.domainInfo
            },
            mutations: {
                SET_CLEAR_DOMAIN_INFO(state) {
                    state.domainInfo = []
                },
                SET_DOMAIN(state, info) {
                    state.domainInfo.push(info)
                }
            },
            actions: {
                async domainInfo({commit}, domain) {
                    const {data} = await repository.whois(domain);
                    commit('SET_DOMAIN', data);
                },

                clearInfo({commit}) {
                    commit('SET_CLEAR_DOMAIN_INFO');
                }
            },
        },
    }
})
