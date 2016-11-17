<template>
    <div class="container chat-container">

        <div class="loginbox">
            <div class="content">
                <h1>聊天系统</h1>

                <input type="text" v-model="name" ref="username" placeholder="请输入用户名">
                <button type="button" name="button" @click="login(name.trim())">登录</button>

            </div>
        </div>

    </div>
</template>

<script>
import User from 'api/user'  // 用户api
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    data () {
        return {
            name : ''
        }
    },
    components: {

    },

    methods: {
        ...mapActions([
            'UserLogin'
        ]),
        login(name) {
            let slef = this;
            if ( !name ) {
                slef.$refs.username.focus();
                alert('用户名不可以为空！')
            }
            User.connect({
                name: name,
                uid : new Date().getTime()
            }, (res) => {
                this.UserLogin(res)
                slef.$router.push('/chat')
            })

        }
    },

    created() {
    }
}
</script>

<style lang="less" scoped>
.chat-container {
    justify-content: center;
    align-items: center;
}
.loginbox {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    width: 80%;
}
.content {
    width: 100%;
}
h1 {
    font-size: 16px;
    font-size: 0.16rem;
    margin-bottom: 10px;
}
input {
    border: 1px solid #f1f1f1;
    box-sizing: border-box;
    height: 40px;
    padding: 5px 10px;
    font-size: 14px;
    width: 100%;
    border-radius: 8px;
}
button {
    border-radius: 8px;
    background: #2d73a9;
    color: #FFF;
    height: 38px;
    border: none;
    font-size: 14px;
    font-size: 0.14rem;
    margin-top: 10px;
    width: 100%;
}
</style>
