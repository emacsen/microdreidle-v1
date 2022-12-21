let pan = 0
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Square)
    game.pause()
    basic.showIcon(IconNames.SmallSquare)
    game.pause()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    game.pause()
    pan = Math.randomRange(0, 3)
    if (pan == 0) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . # .
            . . . # .
            . # # # .
            `)
    } else if (pan == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . # .
            . . . # .
            . # # . #
            `)
    } else if (pan == 2) {
        basic.showLeds(`
            # # # # #
            . . . . #
            . . . . #
            # . . . #
            # # . . #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            . # . . #
            . # # . #
            . . . . #
            # # # # #
            `)
    }
})
