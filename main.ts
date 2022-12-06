basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.playMelody("C5 A B G A F G E ", 120)
    } else {
        if (input.lightLevel() > 50 && input.lightLevel() < 100) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else {
            basic.showIcon(IconNames.Rollerskate)
        }
    }
})
