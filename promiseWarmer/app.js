function promise(i, time) {
    return new Promise((res, rej) => {
        let info = [i, time]
        setTimeout(() => {
            res(info)
        }, time)
})};

let time = async(num) => {
    for (let i = 1; i <= num; i++) {
    let timeOut = Math.random() * 5000
    let information = await promise(i, timeOut)
    console.log(information)
    }
}

time(10)

// funcio retorna promesa
// promesa registra la ronda i temps a executar-se