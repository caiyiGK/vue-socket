import io from 'socket.io-client'

const VUECHAT = {

    // 登录
    userLogin (obj, callback) {
        this.socket = io.connect('http://localhost:8089');
        if (this.socket) {
            callback()
            // 用户名字， 唯一用户uid
            this.user = {
                name : obj.name,
                uid : obj.name + new Date().getTime()
            }
            // 用户登录
            this.socket.emit('login', this.user)
        }
    },

    // 监听用户登录
    onLogin () {
        this.socket.on('login', (opt) => {
            this.updateMessageModal(opt)
        })
    },

    // 更新聊天窗口界面
    updateMessageModal (opt) {
        let obj = {
            Users : opt.Users,          // 在线用户
            Count : opt.Count,          // 当前在线人数
            Name  : opt.Name            // 当前用户名字
        }

    }

}

export default VUECHAT
