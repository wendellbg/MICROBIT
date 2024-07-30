input.onButtonPressed(Button.A, function () {
    basic.showNumber(contador)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    contador = 0
})
input.onButtonPressed(Button.B, function () {
    contador += 1
    basic.showNumber(contador)
})
let contador = 0
basic.showNumber(0)
contador = 0
