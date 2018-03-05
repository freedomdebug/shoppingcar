/**
 * Created by tommy.hu on 2018/3/5.
 */
const ws = new WebSocket('ws://localhost:3000/socket.io/?EIO=4&transport=websocket');

ws.onopen = () => {
    console.log('连接成功');
}

ws.onmessage = (e) => {
    // 接收到了一个消息
    console.log(e.data);
}

ws.onerror = (e) => {
    // 发生了一个错误
    console.log(e.message);
}

ws.onclose = (e) => {
    // 连接被关闭了
    console.log(e.code, e.reason);
}