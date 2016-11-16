<template>
    <div class="footer" id="footer">
        <div class="text"><input type="text" v-model="message"></div>
        <div class="submit"><a @click.stop="send(message)">发送</a></div>
    </div>
</template>

<script>
export default {
    props: {
        send: Function
    },
    data() {
        return {
            message: ''
        }
    },
    components: {

    }
}
</script>

<style lang="less" scoped>
.footer {
    border-top: 1px solid #f1f1f1;
    background: #e8e8e8;
    height: 50px;
    flex-shrink: 0;
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    padding: 6px 10px;
    box-sizing: border-box;
}
.text {
    width: 80%;
}
.text input {
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    height: 38px;
    box-sizing: border-box;
    font-size: 14px;
    font-size: 0.14rem;
    padding: 5px 10px;
}
.submit {
    margin-left: 2%;
    border-radius: 8px;
    background: #2d73a9;
    height: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 18%;
}
.submit a {
    display: block;
    color: #FFF;
    text-decoration: none;
}
</style>
