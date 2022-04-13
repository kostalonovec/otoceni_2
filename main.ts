let stred = [2, 2]
led.plotBrightness(2, 2, 100)
let souradnice = [[0, 0], [1, 1]]
for (let i of souradnice) {
    led.plot(i[0], i[1])
}
forever(function on_forever() {
    let x: number;
    let y: number;
    basic.clearScreen()
    for (let bod of souradnice) {
        x = 0 * (bod[0] - stred[0]) - 1 * (bod[1] - stred[1]) + stred[0]
        y = 1 * (bod[0] - stred[0]) + 0 * (bod[1] - stred[1]) + stred[1]
        bod[0] = x
        bod[1] = y
    }
    for (let h of souradnice) {
        led.plot(h[0], h[1])
    }
    led.plotBrightness(2, 2, 100)
    pause(100)
})
