stred = (2, 2)
led.plot_brightness(2, 2, 100)


souradnice = [[0,0], [1,1]]

for i in souradnice:
    led.plot(i[0], i[1])

def on_forever():
    basic.clear_screen()
    for bod in souradnice:
        x = 0 * (bod[0] - stred[0]) - 1 * (bod[1] - stred[1]) + stred[0]
        y = 1 * (bod[0] - stred[0]) + 0 * (bod[1] - stred[1]) + stred[1]
        bod[0] = x
        bod[1] = y

    for h in souradnice:
        led.plot(h[0], h[1])
    led.plot_brightness(2, 2, 100)
    pause(100)
forever(on_forever)