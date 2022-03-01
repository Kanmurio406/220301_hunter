input.onButtonPressed(Button.A, function () {
    target += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(target)
    radio.sendValue("id", 3)
    radio.sendValue("try", target)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    target += 1
})
let target = 0
radio.setGroup(99)
basic.showIcon(IconNames.Heart)
target = 50
basic.forever(function () {
	
})
