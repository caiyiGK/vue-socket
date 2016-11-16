import io from 'socket.io-client'

var user = {}, socket;

// 用户登录
export const userLogin = (obj, callback) => {
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
            callback(opt);
        })
    }
}

// 用户退出
export const userLogout = (id) => {
    //socket.emit('disconnect')
    location.reload();
}


export const sendMessage = (opt) => {
    socket.emit('msg', opt)
}

export const receiveMessage = (callback) => {
    //console.log(socket)
    socket.on('msg', function(msg) {
        callback(msg)
    })
}
