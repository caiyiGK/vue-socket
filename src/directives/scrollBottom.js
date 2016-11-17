/**
 * 滚动到底部指令
 */
export default {
    update (el) {
        setTimeout(() => {
            el.scrollTop = el.scrollHeight - 90;
        },0)
    }
}
