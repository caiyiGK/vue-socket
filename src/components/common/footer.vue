<template>
    <div class="footer" id="footer">

        <a @click="tab($event)" :class="{'cur' : iscur == 'chat'}">
            <i class="fa fa-user-o"></i>
            <span>必奢</span>
        </a>

        <a href="#" :class="{'cur' : iscur == 'address'}">
            <i class="fa fa-user-o"></i>
            <span>通讯录</span>
        </a>

        <a href="#" :class="{'cur' : iscur == 'find'}">
            <i class="fa fa-user-o"></i>
            <span>发现</span>
        </a>

        <a href="#" :class="{'cur' : iscur == 'me'}">
            <i class="fa fa-user-o"></i>
            <span>我</span>
        </a>

    </div>
</template>

<script>
export default {
    props: {
        tab: Function,
        iscur: String
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
    justify-content: space-between;
    flex-direction: row;
}
.footer a {
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    box-sizing: border-box;
    text-decoration: none;
    flex-grow: 1;
}
.footer a span {
    margin-top: 5px;
    font-size: 0.10rem;
}
.footer a i {
    font-size: 0.14rem;
}
.footer a.cur {
    color: green;
}
</style>
