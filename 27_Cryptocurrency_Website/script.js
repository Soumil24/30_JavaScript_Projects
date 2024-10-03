let bitcoin = document.querySelector("#bitcoin")
let ethereum = document.querySelector("#ethereum")
let dogecoin = document.querySelector("#dogecoin")
let BtWs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
let DogeWs = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade')
let EthWs = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')

BtWs.onmessage = (e)=>{
    let data = JSON.parse(e.data)
    console.log(e.data);
    bitcoin.innerHTML = parseFloat(data.p).toFixed(2)
}
DogeWs.onmessage = (e)=>{
    let data = JSON.parse(e.data)
    console.log(e.data);
    dogecoin.innerHTML = parseFloat(data.p).toFixed(2)
}
EthWs.onmessage = (e)=>{
    let data = JSON.parse(e.data)
    console.log(e.data);
    ethereum.innerHTML = parseFloat(data.p).toFixed(2)
}