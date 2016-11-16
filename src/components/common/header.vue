<template>
    <div class="header" id="header">
            <div class="left"></div>
            <div class="mid header-title"><span>头部</span></div>
            <div class="right"></div>
    </div>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style lang="less" scoped>
.header {
    background: #333;
    height: 50px;
    flex-shrink: 0;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between
}
.mid {
    color: #FFF;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center
}
</style>
