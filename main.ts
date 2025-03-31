function golf (vg: number, vd: number) {
    // avance vers balle
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(1300)
    Kitronik_Move_Motor.stop()
    basic.pause(200)
    // retour arrière après prise de balle
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, vd)
    basic.pause(350)
    Kitronik_Move_Motor.stop()
    // Spin vers mur gauche
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    basic.pause(470)
    // Tout droit vers mur gauche
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(2000)
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    basic.pause(370)
    // Avance vers dépot
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(3078)
    Kitronik_Move_Motor.stop()
    // Spin vers dépot
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(340)
    Kitronik_Move_Motor.stop()
    // apres virage depot
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    golf(61, 60)
})
basic.forever(function () {
	
})
