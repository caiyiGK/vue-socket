<template>

    <div class="container chat-container">

        <chat-header :User="getUser"></chat-header>

        <chat-content>

            <sys-message></sys-message>
            <new-message></new-message>
            <my-message></my-message>

        </chat-content>

        <chat-footer :send="send"></chat-footer>

    </div>

</template>

<script>
import 'assets/style/common.less'
import socket from 'socket.io-client'
import chatHeader from 'components/common/header'
import chatFooter from 'components/common/footer'
import chatContent from 'components/chatContent'

import sysMessage from 'components/chat/sysMessage'
import myMessage from 'components/chat/myMessage'
import newMessage from 'components/chat/newMessage'

import { mapState, mapGetters, mapActions } from 'vuex'
import { userLogout, sendMessage, receiveMessage } from 'api/user'  // 用户api

export default {
    components: {
        chatHeader,
        chatFooter,
        chatContent,
        sysMessage,
        myMessage,
        newMessage
    },

    data() {
        return {
            message: []
        }
    },

    computed : {
        ...mapGetters([
            'getUser'
        ])
    },

    methods: {
        logout(id) {
            userLogout(id)
        },
        send(message) {
            if (!message.trim()) {
                alert('信息不可以为空')
                return
            }
            sendMessage({
                Msg: message,
                Name: this.getUser.Name
            })
        }
    },

    created() {
        receiveMessage((items) => {
            this.message.push(items)
            console.log(this.message)
        });
    }
}
</script>

<style lang="less" scoped>

</style>
