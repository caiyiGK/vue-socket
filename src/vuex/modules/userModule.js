/**
 * 菜单 Module
 * @author: 蔡翊
 * @date : 2016-10-28
 */

 import {
    USERS_POSTS_REQUEST,     // 用户请求
    USERS_POSTS_FAILURE,     // 用户请求失败
    USERS_POSTS_SUCCESS,     // 用户请求成功
 } from '../mutation-types'


export default {

    // MenuModule Init State
    state : {
        Users : '',          // 在线用户
        Count : '',          // 当前在线人数
        Name  : ''           // 当前用户名字
    },

    // MenuModule Mutations
    mutations : {
        [USERS_POSTS_REQUEST] (state) {

        },
        [USERS_POSTS_SUCCESS] (state, payload) {
            Object.assign(state, {...payload})
        },
        [USERS_POSTS_FAILURE] (state) {

        }
    },

    // MenuModule Actions
    actions : {
        UserLogin ({commit}, payload) {
            commit('USERS_POSTS_SUCCESS', payload)
        },
    },

    getters : {
        getUser (state) {
            return state
        }
    }

}
