<template lang="html">

    <div class="newMessage chat-message">
        <div class="content">
            <span>{{msg}}</span>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        msg : {
            type: String,
            default: '暂无消息'
        },
    }
}
</script>

<style lang="less" scoped>
.newMessage {
    justify-content: center;
}
.newMessage .content {
    display: inline-block;
    padding: 5px 10px;
    background: #c7c7c7;
    font-size: 10px;
    font-size: 0.1rem;
    color: #FFF;
    border-radius: 10px;
}
// .messageBox .content:before {
//     right: -5px;
//     border-bottom: 1px solid #CCC;
//     border-right: 1px solid #CCC;
// }
</style>
