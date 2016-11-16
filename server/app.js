var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8089);


var Users = {};   //在线用户
var Count = 0;    //当前在线人数


io.on('connection', function (socket) {
    console.log('a user connected');

    //监听新用户加入
	socket.on('login', function(obj){
		//将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
		socket.name = obj.name;
        socket.uid = obj.uid;

		//检查在线列表，如果不在里面就加入
		if(!Users.hasOwnProperty(obj.uid)) {
			Users[obj.uid] = obj.name;
			//在线人数+1
			Count++;
		}

		//向所有客户端广播用户加入
		io.emit('login', {
            Users : Users,
            Count : Count,
            Name  : obj.name,
            Uid   : obj.uid
        });
		console.log(obj.name+'加入了聊天室');
	});

    //监听用户退出
	socket.on('disconnect', function(opt){
        console.log('disconnect uid is ----------', opt.Uid)

		// 将退出的用户从在线列表中删除
		if(Users.hasOwnProperty(socket.name)) {
			//退出用户的信息
			var obj = {
                Uid:socket.Uid,
                name:onlineUsers[socket.name]
            };
			//删除
			delete Users[socket.name];
			//在线人数-1
			Count--; 

			//向所有客户端广播用户退出
			//io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
			console.log(obj.name+'退出了聊天室');
		}

	});

	//监听用户发布聊天内容
	socket.on('msg', function(obj){
		//向所有客户端广播发布的消息
		io.emit('msg', obj);
		console.log(obj.Name+'说：'+obj.Msg);
	});


});
