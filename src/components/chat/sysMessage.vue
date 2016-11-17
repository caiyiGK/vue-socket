<template lang="html">

    <div class="sysMessage chat-message">

        <div class="userPic">
            <!-- <img src="" alt="" /> -->
            <span></span>
        </div>

        <div class="messageBox">
            <div class="userNmae">{{item.name}}</div>
            <div class="content">
                {{item.msg}}
            </div>
        </div>

    </div>

</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="less" scoped>
.sysMessage {
    flex-direction: row;
}
.messageBox .userNmae {
    margin: 0 0 5px 10px;
    color: #999;
    font-size: 10px;
    font-size: 0.1rem;
    -webkit-font-smoothing: antialiased;
}
.messageBox .content:before {
    left: -5px;
    border-top: 1px solid #CCC;
    border-left: 1px solid #CCC;
}
</style>
