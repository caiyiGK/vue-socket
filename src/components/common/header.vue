<template>
    <div class="header" id="header">

            <div class="left">
                <a @click="logout()">退出</a>
            </div>

            <div class="mid header-title"><span>必奢技术人员沟通群({{User.Count}})</span></div>

            <div class="right">
                <a href="#">
                    <i class="fa fa-bars"></i>
                </a>
            </div>

    </div>
</template>

<script>
export default {
    props : {
        User : Object
    },
    components: {

    },
    methods: {
        logout() {
            this.$router.go('/login')
            location.reload();

        }
    }
}
</script>

<style lang="less" scoped>
.header {
    background: #333;
    height: 45px;
    flex-shrink: 0;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.header div{
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    color: #FFF;
    a {
        color: #FFF;
        text-decoration: none;
    }
}
.mid {
    width: 70%;
    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        width: 100%;
    }
}
.left, .right {
    width: 15%;
}
</style>
