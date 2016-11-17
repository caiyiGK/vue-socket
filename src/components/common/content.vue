<template>
    <div class="chatContent" id="chatContent">
        <slot>暂无数据</slot>
    </div>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style lang="less" scoped>
.chatContent {
    -webkit-overflow-scrolling: touch;
    background: #f1f1f1;
    overflow-y: scroll;
    height: ~'calc(100% - 85px)';
}
</style>
