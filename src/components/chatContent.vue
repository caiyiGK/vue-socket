<template>
    <div class="chatContent" id="chatContent">
        <sys-message></sys-message>
        <new-message></new-message>
        <my-message></my-message>
    </div>
</template>

<script>
import socket from 'api/index'
import sysMessage from 'components/chat/sysMessage'
import myMessage from 'components/chat/myMessage'
import newMessage from 'components/chat/newMessage'
export default {
    components: {
        sysMessage,
        myMessage,
        newMessage
    }
}
</script>

<style lang="less" scoped>
.chatContent {
    background: #f1f1f1;
    overflow-y: scroll;
    height: 100%;
}
</style>
