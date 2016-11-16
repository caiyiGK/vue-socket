import io from 'socket.io-client'

// 用户登录
const userLogin = (obj, callback) => {
    let user   = {},
        socket = io.connect('http://localhost:8089');

    if (socket) {
        // 用户名字， 唯一用户uid
        user = {
            name : obj.name,
            uid : obj.name + new Date().getTime()
        }
        // 用户登录
        socket.emit('login', user);

        // 监听用户登录
        socket.on('login', (opt) => {
            //return updateMessageModal(opt)
            console.log(opt)
            callback(opt);
        })
    }
}

export default userLogin
