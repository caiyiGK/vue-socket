<template>

    <div class="container chat-container">
        <chat-header></chat-header>
        <chat-content></chat-content>
        <chat-footer></chat-footer>
    </div>

</template>

<script>
import 'assets/style/common.less'
import socket from 'socket.io-client'
import chatHeader from 'components/common/header'
import chatFooter from 'components/common/footer'
import chatContent from 'components/chatContent'
export default {
    components: {
        chatHeader,
        chatFooter,
        chatContent
    },
    created() {

    }
}
</script>

<style lang="less" scoped>

</style>
