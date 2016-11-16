<template>
    <div class="chatContent" id="chatContent">
        <!-- <sys-message></sys-message>
        <new-message></new-message>
        <my-message></my-message> -->
        <slot>
            <new-message></new-message>
        </slot>
    </div>
</template>

<script>
import newMessage from 'components/chat/newMessage'
export default {
    components: {
        newMessage
    }
}
</script>

<style lang="less" scoped>
.chatContent {
    background: #f1f1f1;
    overflow-y: scroll;
    height: ~'calc(100% - 85px)';
}
</style>
