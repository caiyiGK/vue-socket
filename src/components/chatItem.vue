<template>
    <div class="chatItem">

        <div class="userPic">
            <!-- <img src="" alt="" /> -->
            <span></span>
        </div>

        <div class="chatBrief">
            <div class="username">必奢技术-蔡翊</div>
            <div class="chat">123123213</div>
        </div>

    </div>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style lang="less" scoped>
.chatItem {
    display: -webkit-flex;
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid #CCC;
}
.userPic {
    flex-shrink: 0;
    display: block;
    height: 50px;
    width: 60px;
    span {
        display: block;
        width: 50px;
        height: 50px;
        background: #000;
        margin: 0 5px;
    }
}
.chatBrief {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    width: calc(~'100% - 60px');
    font-size: 0.14rem;
    justify-content: space-around;
    .chat {
        color: #999;
        font-size: 1px;
        font-size: 0.1rem;
        display: block;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
