<template>

    <div class="container chat-container">

        <chat-header :User="getUser"></chat-header>

        <chat-content v-scrollBottom>
            <div class="" v-if="message.length" v-for="item in message">

                <sys-message v-if="item.uid != uid" :item="item"></sys-message>

                <!-- <new-message :msg="item.msg"></new-message> -->

                <my-message v-if="item.uid == uid"  :item="item"></my-message>

            </div>
        </chat-content>

        <chat-footer :send="send"></chat-footer>

    </div>

</template>

<script>
import chatHeader from 'components/chat/header'         // 聊天头部组件
import chatFooter from 'components/chat/footer'         // 聊天发送组件
import chatContent from 'components/chat/chatContent'   // 聊天消息内容组件

import sysMessage from 'components/chat/sysMessage'     // 朋友消息组件
import myMessage from 'components/chat/myMessage'       // 我的消息组件
import newMessage from 'components/chat/newMessage'     // 时间消息组件

import scrollBottom from 'directives/scrollBottom'      // 滚动到地步指令
import { mapState, mapGetters, mapActions } from 'vuex'
import User from 'api/user'  // 用户api

export default {
    components: {
        chatHeader,     // 聊天头部组件
        chatFooter,     // 聊天发送组件
        chatContent,    // 聊天消息内容组件
        sysMessage,     // 朋友消息组件
        myMessage,      // 我的消息组件
        newMessage      // 时间消息组件
    },

    directives : {
        scrollBottom : scrollBottom
    },

    data() {
        return {
            message: [],        // 消息数组
            uid : User.uid      // 当前用户 uid
        }
    },

    computed : {
        ...mapGetters([
            'getUser'
        ])
    },

    methods: {
        ...mapActions([
            'UserLogin'
        ]),
        send(message) {
            if (!message.trim()) {
                alert('信息不可以为空')
                return
            }
            User.sendMessage({
                msg: message,
                uid: this.uid
            })
        }
    },

    created() {
        User.receiveMessage((res) => {
            this.message.push(res)
        })

    }
}
</script>

<style lang="less" scoped>

</style>
