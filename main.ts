let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
function golf (vg: number, vd: number) {
    // avance vers balle
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(1600)
    Kitronik_Move_Motor.stop()
    basic.pause(200)
    // retour arrière après prise de balle
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, vd)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
    // Spin vers mur gauche
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    basic.pause(450)
    // Tout droit vers mur gauche
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(2500)
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    basic.pause(550)
    // Avance vers dépot
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(4000)
    Kitronik_Move_Motor.stop()
    // Spin vers dépot
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(400)
    Kitronik_Move_Motor.stop()
    // apres virage depot
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(470)
    Kitronik_Move_Motor.stop()
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    golf(46, 45)
})
basic.forever(function () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(2)
    moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.setBrightness(255)
})
