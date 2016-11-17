<template lang="html">

    <div class="myMessage chat-message">

        <div class="userPic">
            <!-- <img src="" alt="" /> -->
            <span></span>
        </div>

        <div class="messageBox">
            <div class="content">{{item.msg}}</div>
        </div>



    </div>

</template>

<script>
export default {
    props: {
        item : Object
    }
}
</script>

<style lang="less" scoped>
.myMessage {
    flex-direction: row-reverse;
}
.messageBox {
    flex-direction: row-reverse;
}
.messageBox .content:before {
    right: -5px;
    border-bottom: 1px solid #CCC;
    border-right: 1px solid #CCC;
}
</style>
