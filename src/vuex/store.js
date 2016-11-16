import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'

// 导入各个模块的初始化 modules 状态
import User from './modules/userModule'

Vue.use(Vuex)

Vue.config.debug = true
Vue.config.devtools = true
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules : {  // 组合模块
        User
    },
    strict: debug,
    plugins: debug ? [logger()] : []
})
