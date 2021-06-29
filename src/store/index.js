import Vue from 'vue';
import Vuex from 'vuex';
import {ADD_RECORD} from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store( {
    actions: {

    },
    mutations: {
        [ADD_RECORD]: (state, record) => {
            state.users.push(record)
        },
    },
    state: {
        users:
            [
                {
                    num: 0,
                    id:Date.now()-2**10,
                    name: 'Аня', waybill: '5846',
                    typeorder:'доставка оптом',
                    createdate: '2021-06-02',
                    isInvisible: true,
                },
                {
                    num: 1,
                    id:Date.now()-2**11,
                    name: 'Борис',
                    waybill: '3980',
                    typeorder:'покупка в розницу',
                    createdate: '2021-06-02',
                    isInvisible: true,
                },
                {
                    num: 2,
                    id:Date.now()-2**12,
                    name: 'Клара',
                    waybill: '7690',
                    typeorder:'доставка оптом',
                    createdate: '2021-06-03',
                    isInvisible: true,
                },
                {
                    num: 3,
                    id:Date.now()-2**13,
                    name: 'Дональд',
                    waybill: '3764',
                    typeorder:'покупка в розницу',
                    createdate: '2021-06-03',
                    isInvisible: true,
                },
                {
                    num: 4,
                    id:Date.now()-2**14,
                    name: 'Эдвард',
                    waybill: '2754',
                    typeorder:'доставка оптом',
                    createdate: '2021-06-04',
                    isInvisible: true,
                },
            ],
    },
    getters: {
        stateUsers: state => {
            return state.users;
        }
    },
});
