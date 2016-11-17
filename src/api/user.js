import io from 'socket.io-client'

export default {
    Users : {},
    uid: '',
    
    // 用户连接
    connect(opt,callback) {
        this.socket = io.connect('http://localhost:8089')
        let obj = {
            name : opt.name,
            uid : opt.uid
        }
        this.socket.emit('login', obj)

        this.login(callback)

    },

    // 用户登录
    login(callback) {
        this.socket.on('login', (res) => {
            this.uid = res.uid
            callback(res)
        })
    },

    // 发送消息
    sendMessage(opt,callback) {
        this.socket.emit('msg', opt)
    },

    // 接收信息
    receiveMessage(callback) {
        this.socket.on('msg', (opt) => {
            callback(opt)
        })
    }

}
