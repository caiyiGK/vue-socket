<template lang="html">

    <div class="myMessage chat-message">

        <div class="userPic">
            <!-- <img src="" alt="" /> -->
            <span></span>
        </div>

        <div class="messageBox">
            <div class="content">
                方法二：强制不换行 
            </div>
        </div>



    </div>

</template>

<script>
export default {

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
