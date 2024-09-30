basic.forever(function () {
    basic.showNumber(0)
    basic.showString("Hello!")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.play(music.stringPlayable("C C5 G E G C5 D B ", 500), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
