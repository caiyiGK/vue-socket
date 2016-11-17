<template>

    <div class="container chat-container">

        <chat-header ></chat-header>

        <chat-content >

            <chat-item v-if="'chat' == cur"></chat-item>

            <chat-address v-if="'address' == cur"></chat-address>

            <chat-address v-if="'find' == cur"></chat-address>

            <chat-address v-if="'me' == cur"></chat-address>

        </chat-content>

        <chat-footer :iscur="cur" :tab="tab"></chat-footer>

    </div>

</template>

<script>
import chatHeader from 'components/common/header'         // 头部组件
import chatFooter from 'components/common/footer'         // 尾部组件
import chatContent from 'components/common/content'       // 容器组件

import chatItem from 'components/chatItem'                // 聊天列表组件
import chatAddress from 'components/chatAddress'                // 聊天列表组件

import { mapState, mapGetters, mapActions } from 'vuex'
import User from 'api/user'  // 用户api

export default {
    components: {
        chatHeader,
        chatFooter,
        chatContent,
        chatItem,
        chatAddress
    },

    data() {
        return {
            cur : 'chat'
        }
    },

    computed : {
        ...mapGetters([

        ])
    },

    methods: {
        ...mapActions([

        ]),
        tab(e) {
            console.log(e)
        }
    },

    created() {

    }
}
</script>

<style lang="less" scoped>

</style>
